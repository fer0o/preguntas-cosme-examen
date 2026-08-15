import { describe, expect, it } from "vitest";

import type { OpenQuestion } from "../data/questions";
import { questions } from "../data/questions";
import { evaluateAnswer } from "./evaluateAnswer";

const fnhQuestion = questions.find((question) => question.id === "cosme-002");
if (!fnhQuestion) {
	throw new Error("Missing expected test question cosme-002.");
}

const celluliteTreatmentQuestion = questions.find((question) => question.id === "cosme-010");
if (!celluliteTreatmentQuestion) {
	throw new Error("Missing expected test question cosme-010.");
}

const freeRadicalQuestion = questions.find((question) => question.id === "cosme-014");
if (!freeRadicalQuestion) {
	throw new Error("Missing expected test question cosme-014.");
}

const facialMusclesQuestion = questions.find((question) => question.id === "cosme-017");
if (!facialMusclesQuestion) {
	throw new Error("Missing expected test question cosme-017.");
}

function keyPointLabel(point: (typeof questions)[number]["keyPoints"][number]): string {
	return typeof point === "string" ? point : point.label;
}

describe("evaluateAnswer", () => {
	it("marks very short answers as insufficient", () => {
		const result = evaluateAnswer(fnhQuestion, "agua");

		expect(result.status).toBe("incorrect");
		expect(result.label).toBe("Respuesta insuficiente");
		expect(result.score).toBe(0);
		expect(result.matchedPoints).toHaveLength(0);
		expect(result.missingPoints).toEqual(fnhQuestion.keyPoints.map(keyPointLabel));
	});

	it("marks a complete answer as correct", () => {
		const result = evaluateAnswer(
			fnhQuestion,
			"El FNH es el factor natural de hidratacion: sustancias higroscopicas que atraen y retienen el agua, mantienen la barrera cutanea flexible, sana e hidratada."
		);

		expect(result.status).toBe("correct");
		expect(result.score).toBeGreaterThanOrEqual(80);
		expect(result.missingPoints.length).toBeLessThan(fnhQuestion.keyPoints.length);
	});

	it("marks an incomplete answer as partial", () => {
		const result = evaluateAnswer(
			fnhQuestion,
			"Es el factor natural de hidratacion, son sustancias higroscopicas y atraen y retienen el agua."
		);

		expect(result.status).toBe("partial");
		expect(result.score).toBeGreaterThanOrEqual(40);
		expect(result.score).toBeLessThan(80);
		expect(result.matchedPoints.length).toBeGreaterThan(0);
		expect(result.missingPoints.length).toBeGreaterThan(0);
	});

	it("marks unrelated answers as incorrect", () => {
		const result = evaluateAnswer(
			fnhQuestion,
			"Los musculos faciales principales son risorio, buccinador y cigomaticos."
		);

		expect(result.status).toBe("incorrect");
		expect(result.score).toBeLessThan(40);
	});

	it("normalizes accents and casing for matching", () => {
		const result = evaluateAnswer(
			fnhQuestion,
			"FACTOR NATURAL DE HIDRATACIÓN con SUSTANCIAS HIGROSCÓPICAS que atraen y retienen el agua."
		);

		expect(result.matchedPoints).toContain("factor natural de hidratacion");
		expect(result.matchedPoints).toContain("sustancias higroscopicas");
		expect(result.matchedPoints).toContain("atraen y retienen el agua");
	});

	it("uses real aliases from the FNH question", () => {
		const result = evaluateAnswer(
			fnhQuestion,
			"El FNH conserva la hidratacion y deja flexible la barrera de la piel."
		);

		expect(result.matchedPoints).toContain("factor natural de hidratacion");
		expect(result.matchedPoints).toContain("atraen y retienen el agua");
		expect(result.matchedPoints).toContain("barrera cutanea flexible");
	});

	it("matches key point aliases while reporting the label", () => {
		const question: OpenQuestion = {
			id: "test-001",
			topic: "Test",
			prompt: "Pregunta de prueba",
			guideAnswer: "La piel conserva la hidratacion y evita perdida de agua.",
			keyPoints: [
				{
					label: "atraen y retienen el agua",
					aliases: ["conserva la hidratacion", "evita perdida de agua"]
				}
			]
		};

		const result = evaluateAnswer(question, "Ayuda a conservar la hidratacion de la piel.");

		expect(result.status).toBe("correct");
		expect(result.score).toBe(100);
		expect(result.matchedPoints).toEqual(["atraen y retienen el agua"]);
		expect(result.matchedPointDetails).toEqual([
			{
				label: "atraen y retienen el agua",
				matchedBy: "conserva la hidratacion"
			}
		]);
		expect(result.missingPoints).toEqual([]);
	});

	it("uses real aliases from the cellulite treatment sequence", () => {
		const result = evaluateAnswer(
			celluliteTreatmentQuestion,
			"Primero abrir ganglios, luego exfoliar, hacer masaje reductor, usar aparatos, drenaje linfatico, mascara y cerrar tratamiento."
		);

		expect(result.status).toBe("correct");
		expect(result.matchedPoints).toContain("apertura de ganglios");
		expect(result.matchedPoints).toContain("exfoliacion");
		expect(result.matchedPoints).toContain("masaje reductivo");
		expect(result.matchedPoints).toContain("aparatologia");
		expect(result.matchedPoints).toContain("drenaje linfatico manual");
		expect(result.matchedPoints).toContain("mascarilla");
		expect(result.matchedPoints).toContain("sellar tratamiento");
		expect(result.matchedPointDetails).toContainEqual({
			label: "apertura de ganglios",
			matchedBy: "abrir ganglios"
		});
		expect(result.matchedPointDetails).toContainEqual({
			label: "masaje reductivo",
			matchedBy: "masaje reductor"
		});
	});

	it("uses real aliases from the free radical question", () => {
		const result = evaluateAnswer(
			freeRadicalQuestion,
			"Son moleculas inestables con un electron libre; roban un electron, causan oxidacion y danan la estructura."
		);

		expect(result.status).toBe("correct");
		expect(result.matchedPoints).toContain("especies quimicas");
		expect(result.matchedPoints).toContain("electron suelto");
		expect(result.matchedPoints).toContain("incompleta e inestable");
		expect(result.matchedPoints).toContain("toman un electron");
		expect(result.matchedPoints).toContain("oxidan otra sustancia");
		expect(result.matchedPoints).toContain("estructura danada");
	});

	it("uses real aliases from the facial muscles question", () => {
		const result = evaluateAnswer(
			facialMusclesQuestion,
			"Risorio, buccinador, cigomaticos, elevador del labio superior, procer y mentoniano."
		);

		expect(result.status).toBe("correct");
		expect(result.matchedPoints).toContain("risorio");
		expect(result.matchedPoints).toContain("buccinador");
		expect(result.matchedPoints).toContain("cigomatico mayor");
		expect(result.matchedPoints).toContain("cigomatico menor");
		expect(result.matchedPoints).toContain("elevador labio superior");
		expect(result.matchedPoints).toContain("piramidal");
		expect(result.matchedPoints).toContain("cuadrado del menton");
	});
});
