import { describe, expect, it } from "vitest";

import { questions } from "./questions";

describe("questions", () => {
	it("contains the confirmed question bank", () => {
		expect(questions).toHaveLength(17);
	});

	it("has unique ids", () => {
		const ids = questions.map((question) => question.id);
		expect(new Set(ids).size).toBe(ids.length);
	});

	it("has the required evaluation fields for each question", () => {
		questions.forEach((question) => {
			expect(question.id).toMatch(/^cosme-\d{3}$/);
			expect(question.topic.trim()).not.toBe("");
			expect(question.prompt.trim()).not.toBe("");
			expect(question.guideAnswer.trim()).not.toBe("");
			expect(question.keyPoints.length).toBeGreaterThan(0);
			question.keyPoints.forEach((point) => {
				expect(point.trim()).not.toBe("");
			});
		});
	});
});
