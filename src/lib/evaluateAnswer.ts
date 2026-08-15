import type { KeyPointInput, OpenQuestion } from "../data/questions";

export type EvaluationResult = {
	status: "correct" | "partial" | "incorrect";
	label: string;
	score: number;
	feedback: string;
	matchedPoints: string[];
	matchedPointDetails: MatchedPointDetail[];
	missingPoints: string[];
};

export type MatchedPointDetail = {
	label: string;
	matchedBy: string;
};

const FILLER_WORDS = new Set([
	"de",
	"del",
	"la",
	"las",
	"lo",
	"los",
	"el",
	"un",
	"una",
	"y",
	"o",
	"a",
	"con",
	"en",
	"para",
	"por",
	"que",
	"se",
	"su",
	"sus",
	"como"
]);

function normalize(value: string): string {
	return value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9ñ\s/]+/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function meaningfulTerms(value: string): string[] {
	return normalize(value)
		.split(" ")
		.filter((term) => term.length > 2 && !FILLER_WORDS.has(term));
}

function matchesPoint(answer: string, point: string): boolean {
	const normalizedAnswer = normalize(answer);
	const normalizedPoint = normalize(point);
	if (normalizedAnswer.includes(normalizedPoint)) return true;

	const terms = meaningfulTerms(point);
	if (terms.length === 0) return false;

	const matchedTerms = terms.filter((term) => normalizedAnswer.includes(term));
	const requiredMatches = Math.max(1, Math.ceil(terms.length * 0.65));
	return matchedTerms.length >= requiredMatches;
}

function keyPointLabel(point: KeyPointInput): string {
	return typeof point === "string" ? point : point.label;
}

function keyPointMatchers(point: KeyPointInput): string[] {
	if (typeof point === "string") return [point];
	return [point.label, ...(point.aliases ?? [])];
}

function findKeyPointMatch(answer: string, point: KeyPointInput): MatchedPointDetail | null {
	const matchedBy = keyPointMatchers(point).find((matcher) => matchesPoint(answer, matcher));
	if (!matchedBy) return null;
	return {
		label: keyPointLabel(point),
		matchedBy
	};
}

export function evaluateAnswer(question: OpenQuestion, answer: string): EvaluationResult {
	const cleanAnswer = answer.trim();
	if (cleanAnswer.length < 8) {
		return {
			status: "incorrect",
			label: "Respuesta insuficiente",
			score: 0,
			feedback: "La respuesta es demasiado corta para evaluar los conceptos clave.",
			matchedPoints: [],
			matchedPointDetails: [],
			missingPoints: question.keyPoints.map(keyPointLabel)
		};
	}

	const matchedPointDetails = question.keyPoints
		.map((point) => findKeyPointMatch(cleanAnswer, point))
		.filter((match): match is MatchedPointDetail => match !== null);
	const matchedPoints = matchedPointDetails.map((match) => match.label);
	const missingPoints = question.keyPoints
		.filter((point) => !matchedPoints.includes(keyPointLabel(point)))
		.map(keyPointLabel);
	const score = Math.round((matchedPoints.length / question.keyPoints.length) * 100);

	if (score >= 80) {
		return {
			status: "correct",
			label: "Correcta",
			score,
			feedback: "La respuesta cubre la mayoria de los puntos clave esperados.",
			matchedPoints,
			matchedPointDetails,
			missingPoints
		};
	}

	if (score >= 40) {
		return {
			status: "partial",
			label: "Parcial",
			score,
			feedback: "La respuesta contiene ideas correctas, pero faltan conceptos importantes.",
			matchedPoints,
			matchedPointDetails,
			missingPoints
		};
	}

	return {
		status: "incorrect",
		label: "Incorrecta",
		score,
		feedback: "La respuesta no cubre suficientes puntos clave de la guia.",
		matchedPoints,
		matchedPointDetails,
		missingPoints
	};
}
