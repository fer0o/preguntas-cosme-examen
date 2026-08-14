import { describe, expect, it } from "vitest";

import { GET, POST } from "../pages/api/evaluate";

function postRequest(payload: unknown): Request {
	return new Request("http://localhost/api/evaluate", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(payload)
	});
}

async function readJson(response: Response) {
	return response.json() as Promise<Record<string, unknown>>;
}

describe("/api/evaluate", () => {
	it("returns a diagnostic response for GET", async () => {
		const response = await GET({} as Parameters<typeof GET>[0]);
		const body = await readJson(response);

		expect(response.status).toBe(200);
		expect(body.ok).toBe(true);
	});

	it("evaluates a valid answer", async () => {
		const response = await POST({
			request: postRequest({
				questionId: "cosme-002",
				answer:
					"Factor natural de hidratacion con sustancias higroscopicas que atraen y retienen el agua."
			})
		} as Parameters<typeof POST>[0]);
		const body = await readJson(response);

		expect(response.status).toBe(200);
		expect(body.status).toBe("partial");
		expect(body.score).toBeGreaterThan(0);
		expect(Array.isArray(body.matchedPoints)).toBe(true);
		expect(Array.isArray(body.missingPoints)).toBe(true);
	});

	it("rejects invalid JSON", async () => {
		const response = await POST({
			request: new Request("http://localhost/api/evaluate", {
				method: "POST",
				body: "{"
			})
		} as Parameters<typeof POST>[0]);
		const body = await readJson(response);

		expect(response.status).toBe(400);
		expect(body.error).toBe("JSON invalido.");
	});

	it("rejects missing questionId", async () => {
		const response = await POST({
			request: postRequest({ answer: "respuesta de prueba" })
		} as Parameters<typeof POST>[0]);
		const body = await readJson(response);

		expect(response.status).toBe(400);
		expect(body.error).toBe("Falta questionId.");
	});

	it("rejects non-text answers", async () => {
		const response = await POST({
			request: postRequest({ questionId: "cosme-002", answer: 123 })
		} as Parameters<typeof POST>[0]);
		const body = await readJson(response);

		expect(response.status).toBe(400);
		expect(body.error).toBe("La respuesta debe ser texto.");
	});

	it("rejects unknown questionId", async () => {
		const response = await POST({
			request: postRequest({ questionId: "cosme-999", answer: "respuesta de prueba" })
		} as Parameters<typeof POST>[0]);
		const body = await readJson(response);

		expect(response.status).toBe(404);
		expect(body.error).toBe("Pregunta no encontrada.");
	});
});
