# Examen Abierto Cosme

App web para practicar preguntas abiertas de cosmetologia. La persona escribe su respuesta, la evalua contra puntos clave de una respuesta guia y guarda su avance localmente en el navegador.

## Estado Actual

- 17 preguntas confirmadas de cosmetologia.
- Practica de respuesta abierta en una sola pantalla.
- Evaluacion local por puntos clave.
- Resultado por pregunta: correcta, parcial o incorrecta.
- Porcentaje, feedback, puntos detectados y puntos faltantes.
- Resumen final con promedio y preguntas por reforzar.
- Historial local de intentos guardados.
- Modales con SweetAlert2 para acciones importantes.
- Sin backend, base de datos, login ni OpenAI API todavia.

## Stack

- Astro 7
- TypeScript
- Tailwind CSS 4
- SweetAlert2

## Requisitos

Node.js `>=22.12.0`

## Instalacion

```sh
npm install
```

## Desarrollo

```sh
npm run dev
```

Por defecto Astro levanta el servidor en:

```txt
http://localhost:4321
```

## Build

```sh
npm run build
```

## Preview

```sh
npm run preview
```

## Estructura Principal

```txt
/
├── public/
├── src/
│   ├── data/
│   │   └── questions.ts
│   ├── lib/
│   │   └── evaluateAnswer.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── AGENTS.md
├── astro.config.mjs
├── package.json
└── README.md
```

## Archivos Clave

- `src/data/questions.ts`: banco de preguntas, respuestas guia y puntos clave.
- `src/lib/evaluateAnswer.ts`: evaluador local deterministico.
- `src/pages/index.astro`: interfaz principal, progreso, resumen e historial.
- `AGENTS.md`: contexto tecnico para futuras sesiones de Codex/IA.

## Persistencia Local

El avance se guarda en `localStorage` con la llave:

```txt
examen-abierto-cosme.progress.v1
```

Se guarda:

- pregunta actual;
- respuestas;
- evaluaciones;
- historial de intentos;
- fecha de actualizacion.

El historial local se limita a 20 intentos.

## Evaluacion

La evaluacion actual es local y simple. Compara la respuesta escrita contra los `keyPoints` de cada pregunta.

El resultado mantiene esta forma:

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

Esta estructura debe mantenerse estable para poder reemplazar despues el evaluador local por una evaluacion con IA sin reescribir toda la interfaz.

## Plan Futuro

- Agregar una API route como `/api/evaluate`.
- Conectar OpenAI desde el servidor usando `OPENAI_API_KEY`.
- Mantener la llave fuera del frontend.
- Reemplazar la evaluacion local por evaluacion semantica con IA.
- Opcional: usar el historial para generar recomendaciones de estudio.

## Notas

- La UI esta en espanol.
- La app esta pensada para uso pequeno: una persona o pocas personas.
- Antes de cerrar cambios de codigo, correr `npm run build`.
