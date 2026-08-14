import { describe, expect, it } from "vitest";

import { questions } from "../data/questions";
import { evaluateAnswer } from "./evaluateAnswer";

const fnhQuestion = questions.find((question) => question.id === "cosme-002");
if (!fnhQuestion) {
	throw new Error("Missing expected test question cosme-002.");
}

describe("evaluateAnswer", () => {
	it("marks very short answers as insufficient", () => {
		const result = evaluateAnswer(fnhQuestion, "agua");

		expect(result.status).toBe("incorrect");
		expect(result.label).toBe("Respuesta insuficiente");
		expect(result.score).toBe(0);
		expect(result.matchedPoints).toHaveLength(0);
		expect(result.missingPoints).toEqual(fnhQuestion.keyPoints);
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
});
