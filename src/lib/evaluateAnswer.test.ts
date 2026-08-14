import { describe, expect, it } from "vitest";

import type { OpenQuestion } from "../data/questions";
import { questions } from "../data/questions";
import { evaluateAnswer } from "./evaluateAnswer";

const fnhQuestion = questions.find((question) => question.id === "cosme-002");
if (!fnhQuestion) {
	throw new Error("Missing expected test question cosme-002.");
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
		expect(result.missingPoints).toEqual([]);
	});
});
