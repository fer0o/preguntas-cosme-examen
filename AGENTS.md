# AGENTS

## Project Reality

- This is a single-package Astro app for open-ended cosmetology exam practice.
- Stack: Astro 7, TypeScript, Tailwind CSS 4, SweetAlert2.
- The app is frontend-only. There is no backend, database, auth, paid API, or OpenAI integration.
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
- `src/data/questions.ts`: confirmed question bank with `id`, `topic`, `prompt`, `guideAnswer`, and `keyPoints`. Every key point is an object with `label` and `aliases`.
- `src/lib/evaluateAnswer.ts`: deterministic local evaluator. It normalizes accents/case and compares the answer against key point labels and aliases.
- `src/layouts/Layout.astro`: base HTML shell, Spanish document language, title, and body styling.
- `src/styles/global.css`: Tailwind CSS import.

## Commands

- Install dependencies: `npm install`
- Dev server: `npm run dev`
- Production build check: `npm run build`
- Preview production build: `npm run preview`
- Tests: `npm test`

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

Keep this result shape stable while improving the local evaluator:

```ts
{
	status: "correct" | "partial" | "incorrect",
	label: string,
	score: number,
	feedback: string,
	matchedPoints: string[],
	matchedPointDetails: { label: string, matchedBy: string }[],
	missingPoints: string[]
}
```

Current local evaluation supports local aliases/synonyms. It can still vary when users phrase answers in ways that are not covered by aliases.

## Future Local Evaluation Plan

- Keep the app free/local and avoid paid API dependencies.
- Keep `keyPoints` as objects with `label` and `aliases`.
- Add or adjust aliases from real user answers that score unfairly.
- Add local rules for definitions, lists, and ordered treatment sequences if needed.
- Update tests whenever evaluator behavior changes.

## Editing Notes

- Preserve the Astro JSON embedding safety pattern:

```ts
JSON.stringify(data).replace(/</g, "\\u003c")
```

- Do not edit generated folders such as `dist/`, `.astro/`, or `node_modules/`.
- Keep changes small and aligned with the existing simple single-page app.
- If adding dependencies, run `npm install <package>` so `package-lock.json` stays in sync.
- Before finishing code changes, run `npm run build`.
