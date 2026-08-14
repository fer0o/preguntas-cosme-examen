import type { APIRoute } from "astro";

import { questions } from "../../data/questions";
import { evaluateAnswer } from "../../lib/evaluateAnswer";

type EvaluateRequest = {
	questionId?: string;
	answer?: string;
};

function jsonResponse(payload: unknown, status = 200): Response {
	return new Response(JSON.stringify(payload), {
		status,
		headers: {
			"content-type": "application/json"
		}
	});
}

export const POST: APIRoute = async ({ request }) => {
	let payload: EvaluateRequest;

	try {
		payload = (await request.json()) as EvaluateRequest;
	} catch {
		return jsonResponse({ error: "JSON invalido." }, 400);
	}

	const questionId = payload.questionId?.trim();
	const answer = payload.answer ?? "";

	if (!questionId) {
		return jsonResponse({ error: "Falta questionId." }, 400);
	}

	if (typeof answer !== "string") {
		return jsonResponse({ error: "La respuesta debe ser texto." }, 400);
	}

	const question = questions.find((item) => item.id === questionId);
	if (!question) {
		return jsonResponse({ error: "Pregunta no encontrada." }, 404);
	}

	return jsonResponse(evaluateAnswer(question, answer));
};

export const GET: APIRoute = () =>
	jsonResponse({
		ok: true,
		message: "Usa POST con questionId y answer para evaluar una respuesta."
	});
