export type KeyPoint = {
	label: string;
	aliases?: string[];
};

export type KeyPointInput = string | KeyPoint;

export type OpenQuestion = {
	id: string;
	topic: string;
	prompt: string;
	guideAnswer: string;
	keyPoints: KeyPointInput[];
};

export const questions: OpenQuestion[] = [
	{
		id: "cosme-001",
		topic: "Cosmetologia",
		prompt: "Cuales son las capas de la epidermis y funcion?",
		guideAnswer:
			"Estrato corneo: barrera que protege la piel del polvo y germenes. Estrato lucido: se encuentra en palmas de manos y plantas del pie, resistente al roce. Estrato granuloso: mantiene niveles de hidratacion y se encuentran las ceramidas. Estrato espinoso: es el sistema inmunologico de la piel y contiene celulas de Langerhans. Estrato basal: celulas nuevas para renovar la epidermis, se encuentran las celulas de Merkel y melanocitos.",
		keyPoints: [
			{ label: "estrato corneo", aliases: ["capa cornea", "corneo"] },
			{
				label: "protege la piel del polvo y germenes",
				aliases: ["barrera protectora", "protege de polvo y germenes", "evita entrada de germenes"]
			},
			{ label: "estrato lucido", aliases: ["capa lucida", "lucido"] },
			{ label: "palmas de manos", aliases: ["palmas", "palma de la mano"] },
			{ label: "plantas del pie", aliases: ["plantas de los pies", "planta del pie"] },
			{ label: "resistente al roce", aliases: ["soporta friccion", "resiste friccion"] },
			{ label: "estrato granuloso", aliases: ["capa granulosa", "granuloso"] },
			{
				label: "hidratacion",
				aliases: ["mantiene hidratacion", "nivel de agua", "niveles de hidratacion"]
			},
			{ label: "ceramidas", aliases: ["lipidos cementantes"] },
			{ label: "estrato espinoso", aliases: ["capa espinosa", "espinoso"] },
			{
				label: "sistema inmunologico",
				aliases: ["defensa inmunologica", "defensa de la piel", "inmunidad de la piel"]
			},
			{ label: "celulas de langerhans", aliases: ["langerhans"] },
			{ label: "estrato basal", aliases: ["capa basal", "basal"] },
			{
				label: "renovar la epidermis",
				aliases: ["regenera la epidermis", "produce celulas nuevas", "renovacion celular"]
			},
			{ label: "celulas de merkel", aliases: ["merkel"] },
			{ label: "melanocitos", aliases: ["celulas productoras de melanina"] }
		]
	},
	{
		id: "cosme-002",
		topic: "Cosmetologia",
		prompt: "Que es FNH? Explica su funcion.",
		guideAnswer:
			"Factor Natural de Hidratacion. Sustancias higroscopicas naturales de la piel que atraen y retienen el agua, mantiene la barrera cutanea flexible, sana e hidratada.",
		keyPoints: [
			{
				label: "factor natural de hidratacion",
				aliases: ["fnh", "factor natural hidratante", "natural moisturizing factor"]
			},
			{
				label: "sustancias higroscopicas",
				aliases: ["sustancias que atraen agua", "componentes higroscopicos", "absorbe agua"]
			},
			{
				label: "atraen y retienen el agua",
				aliases: ["retienen agua", "conserva la hidratacion", "mantiene agua en la piel"]
			},
			{
				label: "barrera cutanea flexible",
				aliases: ["mantiene flexible la barrera", "flexibilidad de la piel", "barrera de la piel flexible"]
			},
			{
				label: "sana e hidratada",
				aliases: ["piel hidratada", "piel sana", "mantiene la piel sana e hidratada"]
			}
		]
	},
	{
		id: "cosme-003",
		topic: "Cosmetologia",
		prompt: "Cual es la funcion de la UDE?",
		guideAnswer:
			"Dar soporte estructural, regular el paso de nutrientes y actuar como barrera de defensa.",
		keyPoints: [
			{
				label: "dar soporte estructural",
				aliases: ["soporte estructural", "sostener la estructura", "dar estructura"]
			},
			{
				label: "regular el paso de nutrientes",
				aliases: ["controla nutrientes", "regula nutrientes", "paso de nutrientes"]
			},
			{
				label: "barrera de defensa",
				aliases: ["defensa", "proteccion", "barrera protectora"]
			}
		]
	},
	{
		id: "cosme-004",
		topic: "Cosmetologia",
		prompt: "Que es la MEC?",
		guideAnswer: "Matriz extracelular, contiene colageno y elastina.",
		keyPoints: [
			{ label: "matriz extracelular", aliases: ["mec", "matriz extra celular"] },
			{ label: "colageno", aliases: ["fibras de colageno"] },
			{ label: "elastina", aliases: ["fibras elasticas"] }
		]
	},
	{
		id: "cosme-005",
		topic: "Cosmetologia",
		prompt: "Cuales son los GAGs?",
		guideAnswer:
			"Son hidratantes naturales como el acido hialuronico, ceramidas y aminoacidos.",
		keyPoints: [
			{
				label: "hidratantes naturales",
				aliases: ["humectantes naturales", "mantienen hidratacion", "retienen humedad"]
			},
			{ label: "acido hialuronico", aliases: ["hialuronico"] },
			{ label: "ceramidas", aliases: ["lipidos de barrera"] },
			{ label: "aminoacidos", aliases: ["amino acidos"] }
		]
	},
	{
		id: "cosme-006",
		topic: "Cosmetologia",
		prompt: "En que estrato se encuentran las ceramidas y explica su funcion.",
		guideAnswer:
			"Estrato granuloso. Actuan como cemento, protegiendo la barrera cutanea, retiene la humedad, previene deshidratacion y bloquea la entrada de contaminacion.",
		keyPoints: [
			"estrato granuloso",
			"actuan como cemento",
			"protegen la barrera cutanea",
			"retienen la humedad",
			"previenen deshidratacion",
			"bloquean la entrada de contaminacion"
		]
	},
	{
		id: "cosme-007",
		topic: "Cosmetologia",
		prompt: "Escribe el proceso pigmentario.",
		guideAnswer:
			"Al exponer la piel a la radiacion UV, los melanocitos actuan como glandulas secretoras produciendo granulos de melanina.",
		keyPoints: [
			"radiacion uv",
			"melanocitos",
			"glandulas secretoras",
			"granulos de melanina"
		]
	},
	{
		id: "cosme-008",
		topic: "Cosmetologia",
		prompt: "Tipos de celulas adiposas.",
		guideAnswer:
			"Blanco: reserva energetica, tejido maduro. Pardo: generador de calor, tejido inmaduro.",
		keyPoints: [
			"blanco",
			"reserva energetica",
			"tejido maduro",
			"pardo",
			"generador de calor",
			"tejido inmaduro"
		]
	},
	{
		id: "cosme-009",
		topic: "Cosmetologia",
		prompt: "Factores determinantes de la celulitis.",
		guideAnswer:
			"Edad, genetica, vida sedentaria, falta de hidratacion, mala circulacion y obesidad.",
		keyPoints: [
			"edad",
			"genetica",
			"vida sedentaria",
			"falta de hidratacion",
			"mala circulacion",
			"obesidad"
		]
	},
	{
		id: "cosme-010",
		topic: "Tratamientos",
		prompt: "Secuencia del tratamiento para celulitis.",
		guideAnswer:
			"Apertura de ganglios, exfoliacion, masaje reductivo, aparatologia, drenaje linfatico manual, mascarilla y sellar tratamiento.",
		keyPoints: [
			"apertura de ganglios",
			"exfoliacion",
			"masaje reductivo",
			"aparatologia",
			"drenaje linfatico manual",
			"mascarilla",
			"sellar tratamiento"
		]
	},
	{
		id: "cosme-011",
		topic: "Consulta",
		prompt: "Preguntas importantes que debo hacer a los clientes.",
		guideAnswer:
			"Que enfermedades has padecido? Tienes cirugias esteticas o implantes / injertos?",
		keyPoints: [
			"enfermedades has padecido",
			"cirugias esteticas",
			"implantes",
			"injertos"
		]
	},
	{
		id: "cosme-012",
		topic: "Tratamientos",
		prompt: "Secuencia de tratamiento de acne.",
		guideAnswer:
			"Limpieza, exfoliacion, extraccion, plasma con ozono o alta frecuencia, reparador tisular, aceite de ozono, mascarilla, tonico y sellar tratamiento. Terapia LED antes, durante o despues de mascarilla.",
		keyPoints: [
			"limpieza",
			"exfoliacion",
			"extraccion",
			"plasma con ozono",
			"alta frecuencia",
			"reparador tisular",
			"aceite de ozono",
			"mascarilla",
			"tonico",
			"sellar tratamiento",
			"terapia led"
		]
	},
	{
		id: "cosme-013",
		topic: "Tratamientos",
		prompt: "Secuencia hidratacion facial.",
		guideAnswer:
			"Piel seca, sensible, leve deshidratacion con telangiectasias. Aroma cosmetica, desmaquillar con limpiadora de acido hialuronico, exfoliante de coco o peeling de acido hialuronico, tonico de aloe vera, mascarilla de velo con luz LED roja y sellar tratamiento con tonico de acido hialuronico y protector solar.",
		keyPoints: [
			"piel seca",
			"sensible",
			"leve deshidratacion",
			"telangiectasias",
			"aroma cosmetica",
			"limpiadora de acido hialuronico",
			"exfoliante de coco",
			"peeling de acido hialuronico",
			"tonico de aloe vera",
			"mascarilla de velo",
			"luz led roja",
			"tonico de acido hialuronico",
			"protector solar"
		]
	},
	{
		id: "cosme-014",
		topic: "Cosmetologia",
		prompt: "Que es un radical libre?",
		guideAnswer:
			"Especies quimicas caracterizadas por tener un electron suelto, haciendola electronicamente incompleta e inestable. Para obtener estabilidad toman un electron de otra sustancia, oxidandola y dejando a otra inestable y con estructura danada.",
		keyPoints: [
			"especies quimicas",
			"electron suelto",
			"incompleta e inestable",
			"toman un electron",
			"oxidan otra sustancia",
			"estructura danada"
		]
	},
	{
		id: "cosme-015",
		topic: "Tratamientos",
		prompt: "Secuencia de tratamiento reductivo con aparatos.",
		guideAnswer:
			"Exfoliacion, apertura de ganglios, masaje reductivo, maderoterapia seguido de cavitacion, ultrasonido o radiofrecuencia segun el tipo de grasa; finalizamos con metaloterapia fria. Masaje corporal igual a drenaje linfatico, mascarilla y sellar tratamiento con vendas.",
		keyPoints: [
			"exfoliacion",
			"apertura de ganglios",
			"masaje reductivo",
			"maderoterapia",
			"cavitacion",
			"ultrasonido",
			"radiofrecuencia",
			"tipo de grasa",
			"metaloterapia fria",
			"drenaje linfatico",
			"mascarilla",
			"sellar tratamiento con vendas"
		]
	},
	{
		id: "cosme-016",
		topic: "Cosmetologia",
		prompt: "Reparadores tisulares, que son?",
		guideAnswer:
			"Activos que ayudan a la hidratacion y a reparar la piel. Ejemplos: aloe vera, rosa mosqueta, frutos rojos, acido hialuronico, ceramidas y jalea real.",
		keyPoints: [
			"activos",
			"ayudan a la hidratacion",
			"reparar la piel",
			"aloe vera",
			"rosa mosqueta",
			"frutos rojos",
			"acido hialuronico",
			"ceramidas",
			"jalea real"
		]
	},
	{
		id: "cosme-017",
		topic: "Anatomia facial",
		prompt: "Senala los 6 musculos faciales.",
		guideAnswer:
			"Risorio, buccinador, cigomatico mayor / menor, elevador labio superior, piramidal y cuadrado del menton.",
		keyPoints: [
			"risorio",
			"buccinador",
			"cigomatico mayor",
			"cigomatico menor",
			"elevador labio superior",
			"piramidal",
			"cuadrado del menton"
		]
	}
];
