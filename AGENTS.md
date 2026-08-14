# AGENTS

## Project Reality

- This is a single-package Astro app for open-ended cosmetology exam practice.
- Stack: Astro 7, TypeScript, Tailwind CSS 4, SweetAlert2.
- The app is currently frontend-only. There is no backend, database, auth, or OpenAI API route yet.
- The app is intended for very small usage: usually one person, maybe up to five.
- UI copy is Spanish and should stay Spanish.
- The local filesystem path may be nested, but the Git repository root is this directory.

## Current Product

The app lets the user:

- Practice 17 confirmed open-ended cosmetology questions.
- Write free-text answers.
- Save answers locally in the browser.
- Evaluate each answer locally against structured key points.
- See result status: `correct`, `partial`, or `incorrect`.
- See score percentage, feedback, detected points, and missing points.
- Retry a question by editing the answer; editing clears the previous evaluation for that question.
- See a final summary with answered/evaluated counts, average score, and status totals.
- See weak questions ordered by lowest score and jump back to them.
- Save local attempts to history.
- Load a saved attempt from history.
- Clear current progress or local history through SweetAlert2 modals.

## Code Map

- `src/pages/index.astro`: main app UI, client-side state, localStorage persistence, summary, and history.
- `src/data/questions.ts`: confirmed question bank with `id`, `topic`, `prompt`, `guideAnswer`, and `keyPoints`.
- `src/lib/evaluateAnswer.ts`: deterministic local evaluator. It normalizes accents/case and compares the answer against `keyPoints`.
- `src/layouts/Layout.astro`: base HTML shell, Spanish document language, title, and body styling.
- `src/styles/global.css`: Tailwind CSS import.
- `src/components/Welcome.astro`, `src/assets/*`: leftover Astro starter files; currently not used by the app.

## Commands

- Install dependencies: `npm install`
- Dev server: `npm run dev`
- Production build check: `npm run build`
- Preview production build: `npm run preview`
- There are no custom lint/test scripts yet.

## Persistence

Current progress is stored in browser `localStorage` under:

```txt
examen-abierto-cosme.progress.v1
```

Stored data includes:

- `currentIndex`
- `answers`
- `results`
- `history`
- `updatedAt`

History is capped at 20 attempts in `src/pages/index.astro`.

## Evaluation Contract

Keep this result shape stable because it should also work when evaluation is moved to AI:

```ts
{
	status: "correct" | "partial" | "incorrect",
	label: string,
	score: number,
	feedback: string,
	matchedPoints: string[],
	missingPoints: string[]
}
```

Current local evaluation is intentionally simple. It is useful for validating the UX, but it is not semantically equivalent to AI evaluation. It can vary when users phrase answers differently.

## Future AI Plan

When connecting OpenAI later:

- Do not put `OPENAI_API_KEY` in frontend code.
- Add a server/API route, likely `/api/evaluate`.
- The API route should receive question data and the user's answer.
- The API route should return the same evaluation contract used by `evaluateAnswer`.
- The UI should not need a major rewrite; only the evaluation call should change.
- A later feature could use saved history to generate study recommendations, but normal history rendering should not require AI.

## Editing Notes

- Preserve the Astro JSON embedding safety pattern:

```ts
JSON.stringify(data).replace(/</g, "\\u003c")
```

- Do not edit generated folders such as `dist/`, `.astro/`, or `node_modules/`.
- Keep changes small and aligned with the existing simple single-page app.
- If adding dependencies, run `npm install <package>` so `package-lock.json` stays in sync.
- Before finishing code changes, run `npm run build`.
