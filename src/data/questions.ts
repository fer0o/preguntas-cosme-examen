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
			{ label: "estrato granuloso", aliases: ["capa granulosa", "granuloso"] },
			{
				label: "actuan como cemento",
				aliases: ["cemento celular", "cemento de la piel", "union entre celulas"]
			},
			{
				label: "protegen la barrera cutanea",
				aliases: ["protege la barrera de la piel", "refuerzan la barrera cutanea", "proteccion cutanea"]
			},
			{
				label: "retienen la humedad",
				aliases: ["mantienen humedad", "conservan la hidratacion", "retienen agua"]
			},
			{
				label: "previenen deshidratacion",
				aliases: ["evitan deshidratacion", "evitan perdida de agua", "previenen perdida de agua"]
			},
			{
				label: "bloquean la entrada de contaminacion",
				aliases: ["evitan contaminacion", "impiden entrada de contaminantes", "bloquean contaminantes"]
			}
		]
	},
	{
		id: "cosme-007",
		topic: "Cosmetologia",
		prompt: "Escribe el proceso pigmentario.",
		guideAnswer:
			"Al exponer la piel a la radiacion UV, los melanocitos actuan como glandulas secretoras produciendo granulos de melanina.",
		keyPoints: [
			{ label: "radiacion uv", aliases: ["rayos uv", "luz ultravioleta", "radiacion ultravioleta"] },
			{ label: "melanocitos", aliases: ["celulas melanociticas"] },
			{
				label: "glandulas secretoras",
				aliases: ["actuan como secretoras", "secretan", "producen secrecion"]
			},
			{
				label: "granulos de melanina",
				aliases: ["melanina", "pigmento melanina", "granulos pigmentarios"]
			}
		]
	},
	{
		id: "cosme-008",
		topic: "Cosmetologia",
		prompt: "Tipos de celulas adiposas.",
		guideAnswer:
			"Blanco: reserva energetica, tejido maduro. Pardo: generador de calor, tejido inmaduro.",
		keyPoints: [
			{ label: "blanco", aliases: ["adipocito blanco", "celula adiposa blanca", "grasa blanca"] },
			{
				label: "reserva energetica",
				aliases: ["almacena energia", "reserva de energia", "almacen de energia"]
			},
			{ label: "tejido maduro", aliases: ["maduro"] },
			{ label: "pardo", aliases: ["adipocito pardo", "celula adiposa parda", "grasa parda"] },
			{
				label: "generador de calor",
				aliases: ["produce calor", "genera calor", "termogenesis"]
			},
			{ label: "tejido inmaduro", aliases: ["inmaduro"] }
		]
	},
	{
		id: "cosme-009",
		topic: "Cosmetologia",
		prompt: "Factores determinantes de la celulitis.",
		guideAnswer:
			"Edad, genetica, vida sedentaria, falta de hidratacion, mala circulacion y obesidad.",
		keyPoints: [
			{ label: "edad", aliases: ["envejecimiento"] },
			{ label: "genetica", aliases: ["herencia", "factor hereditario", "predisposicion genetica"] },
			{ label: "vida sedentaria", aliases: ["sedentarismo", "falta de actividad fisica"] },
			{
				label: "falta de hidratacion",
				aliases: ["deshidratacion", "poca hidratacion", "no tomar agua"]
			},
			{
				label: "mala circulacion",
				aliases: ["problemas circulatorios", "circulacion deficiente", "pobre circulacion"]
			},
			{ label: "obesidad", aliases: ["sobrepeso", "exceso de peso"] }
		]
	},
	{
		id: "cosme-010",
		topic: "Tratamientos",
		prompt: "Secuencia del tratamiento para celulitis.",
		guideAnswer:
			"Apertura de ganglios, exfoliacion, masaje reductivo, aparatologia, drenaje linfatico manual, mascarilla y sellar tratamiento.",
		keyPoints: [
			{ label: "apertura de ganglios", aliases: ["abrir ganglios", "activacion de ganglios"] },
			{ label: "exfoliacion", aliases: ["exfoliar", "exfoliante"] },
			{ label: "masaje reductivo", aliases: ["masaje para reducir", "masaje reductor"] },
			{ label: "aparatologia", aliases: ["aparatos", "equipos", "uso de aparatologia"] },
			{
				label: "drenaje linfatico manual",
				aliases: ["drenaje linfatico", "drenaje manual", "masaje linfatico"]
			},
			{ label: "mascarilla", aliases: ["mascara", "aplicar mascarilla"] },
			{ label: "sellar tratamiento", aliases: ["sellado", "cerrar tratamiento", "finalizar tratamiento"] }
		]
	},
	{
		id: "cosme-011",
		topic: "Consulta",
		prompt: "Preguntas importantes que debo hacer a los clientes.",
		guideAnswer:
			"Que enfermedades has padecido? Tienes cirugias esteticas o implantes / injertos?",
		keyPoints: [
			{
				label: "enfermedades has padecido",
				aliases: ["antecedentes medicos", "enfermedades previas", "padecimientos", "historial medico"]
			},
			{
				label: "cirugias esteticas",
				aliases: ["cirugias", "procedimientos esteticos", "operaciones esteticas"]
			},
			{ label: "implantes", aliases: ["implante", "protesis"] },
			{ label: "injertos", aliases: ["injerto", "rellenos", "relleno"] }
		]
	},
	{
		id: "cosme-012",
		topic: "Tratamientos",
		prompt: "Secuencia de tratamiento de acne.",
		guideAnswer:
			"Limpieza, exfoliacion, extraccion, plasma con ozono o alta frecuencia, reparador tisular, aceite de ozono, mascarilla, tonico y sellar tratamiento. Terapia LED antes, durante o despues de mascarilla.",
		keyPoints: [
			{ label: "limpieza", aliases: ["limpiar", "higiene facial", "asepsia"] },
			{ label: "exfoliacion", aliases: ["exfoliar", "exfoliante"] },
			{ label: "extraccion", aliases: ["extraer", "extracciones", "retiro de comedones"] },
			{ label: "plasma con ozono", aliases: ["plasma ozono", "plasma ozonizado"] },
			{ label: "alta frecuencia", aliases: ["alta frecuencia facial", "electrodo de alta frecuencia"] },
			{
				label: "reparador tisular",
				aliases: ["reparadores tisulares", "activo reparador", "reparador de piel"]
			},
			{ label: "aceite de ozono", aliases: ["oleo de ozono", "ozono en aceite"] },
			{ label: "mascarilla", aliases: ["mascara", "aplicar mascarilla"] },
			{ label: "tonico", aliases: ["tonificar", "locion tonica"] },
			{ label: "sellar tratamiento", aliases: ["sellado", "cerrar tratamiento", "finalizar tratamiento"] },
			{ label: "terapia led", aliases: ["led", "luz led", "fototerapia led"] }
		]
	},
	{
		id: "cosme-013",
		topic: "Tratamientos",
		prompt: "Secuencia hidratacion facial.",
		guideAnswer:
			"Piel seca, sensible, leve deshidratacion con telangiectasias. Aroma cosmetica, desmaquillar con limpiadora de acido hialuronico, exfoliante de coco o peeling de acido hialuronico, tonico de aloe vera, mascarilla de velo con luz LED roja y sellar tratamiento con tonico de acido hialuronico y protector solar.",
		keyPoints: [
			{ label: "piel seca", aliases: ["resequedad", "piel reseca"] },
			{ label: "sensible", aliases: ["piel sensible", "sensibilidad"] },
			{ label: "leve deshidratacion", aliases: ["deshidratacion ligera", "poca hidratacion"] },
			{ label: "telangiectasias", aliases: ["telangiectasia", "vasitos", "capilares visibles"] },
			{ label: "aroma cosmetica", aliases: ["aromacosmetica", "aromaterapia cosmetica"] },
			{
				label: "limpiadora de acido hialuronico",
				aliases: ["limpieza con acido hialuronico", "desmaquillar con hialuronico", "limpiador hialuronico"]
			},
			{ label: "exfoliante de coco", aliases: ["exfoliar con coco", "coco"] },
			{
				label: "peeling de acido hialuronico",
				aliases: ["peeling hialuronico", "peeling con hialuronico"]
			},
			{ label: "tonico de aloe vera", aliases: ["tonico aloe", "aloe vera", "sabila"] },
			{ label: "mascarilla de velo", aliases: ["velo", "mascara de velo"] },
			{ label: "luz led roja", aliases: ["led roja", "terapia led roja", "luz roja"] },
			{
				label: "tonico de acido hialuronico",
				aliases: ["tonico hialuronico", "acido hialuronico para sellar"]
			},
			{ label: "protector solar", aliases: ["bloqueador solar", "fps", "proteccion solar"] }
		]
	},
	{
		id: "cosme-014",
		topic: "Cosmetologia",
		prompt: "Que es un radical libre?",
		guideAnswer:
			"Especies quimicas caracterizadas por tener un electron suelto, haciendola electronicamente incompleta e inestable. Para obtener estabilidad toman un electron de otra sustancia, oxidandola y dejando a otra inestable y con estructura danada.",
		keyPoints: [
			{ label: "especies quimicas", aliases: ["moleculas", "atomos", "compuestos quimicos"] },
			{ label: "electron suelto", aliases: ["electron libre", "electron desapareado", "electron sin pareja"] },
			{
				label: "incompleta e inestable",
				aliases: ["inestable", "electronicamente incompleta", "no tiene estabilidad"]
			},
			{
				label: "toman un electron",
				aliases: ["roban un electron", "buscan un electron", "captan electrones"]
			},
			{
				label: "oxidan otra sustancia",
				aliases: ["causan oxidacion", "provocan oxidacion", "oxidan celulas"]
			},
			{
				label: "estructura danada",
				aliases: ["dana estructura", "causa dano", "deja otra molecula inestable"]
			}
		]
	},
	{
		id: "cosme-015",
		topic: "Tratamientos",
		prompt: "Secuencia de tratamiento reductivo con aparatos.",
		guideAnswer:
			"Exfoliacion, apertura de ganglios, masaje reductivo, maderoterapia seguido de cavitacion, ultrasonido o radiofrecuencia segun el tipo de grasa; finalizamos con metaloterapia fria. Masaje corporal igual a drenaje linfatico, mascarilla y sellar tratamiento con vendas.",
		keyPoints: [
			{ label: "exfoliacion", aliases: ["exfoliar", "exfoliante"] },
			{ label: "apertura de ganglios", aliases: ["abrir ganglios", "activacion de ganglios"] },
			{ label: "masaje reductivo", aliases: ["masaje reductor", "masaje para reducir"] },
			{ label: "maderoterapia", aliases: ["madera", "terapia con madera"] },
			{ label: "cavitacion", aliases: ["cavitador"] },
			{ label: "ultrasonido", aliases: ["ultrasonido estetico"] },
			{ label: "radiofrecuencia", aliases: ["radio frecuencia", "rf"] },
			{ label: "tipo de grasa", aliases: ["segun la grasa", "dependiendo de la grasa"] },
			{ label: "metaloterapia fria", aliases: ["metal frio", "metaloterapia con frio"] },
			{ label: "drenaje linfatico", aliases: ["drenaje", "masaje linfatico", "drenaje manual"] },
			{ label: "mascarilla", aliases: ["mascara", "aplicar mascarilla"] },
			{
				label: "sellar tratamiento con vendas",
				aliases: ["vendas", "vendaje", "sellar con vendas", "cerrar con vendas"]
			}
		]
	},
	{
		id: "cosme-016",
		topic: "Cosmetologia",
		prompt: "Reparadores tisulares, que son?",
		guideAnswer:
			"Activos que ayudan a la hidratacion y a reparar la piel. Ejemplos: aloe vera, rosa mosqueta, frutos rojos, acido hialuronico, ceramidas y jalea real.",
		keyPoints: [
			{ label: "activos", aliases: ["principios activos", "ingredientes activos"] },
			{
				label: "ayudan a la hidratacion",
				aliases: ["hidratan", "aportan hidratacion", "mantienen hidratacion"]
			},
			{ label: "reparar la piel", aliases: ["regenerar la piel", "reparacion cutanea", "restaurar la piel"] },
			{ label: "aloe vera", aliases: ["sabila"] },
			{ label: "rosa mosqueta", aliases: ["aceite de rosa mosqueta"] },
			{ label: "frutos rojos", aliases: ["frutas rojas", "berries"] },
			{ label: "acido hialuronico", aliases: ["hialuronico"] },
			{ label: "ceramidas", aliases: ["lipidos de barrera"] },
			{ label: "jalea real", aliases: ["jalea"] }
		]
	},
	{
		id: "cosme-017",
		topic: "Anatomia facial",
		prompt: "Senala los 6 musculos faciales.",
		guideAnswer:
			"Risorio, buccinador, cigomatico mayor / menor, elevador labio superior, piramidal y cuadrado del menton.",
		keyPoints: [
			{ label: "risorio", aliases: ["musculo risorio"] },
			{ label: "buccinador", aliases: ["musculo buccinador"] },
			{
				label: "cigomatico mayor",
				aliases: ["zigomatico mayor", "cigomatico mayor y menor", "cigomaticos"]
			},
			{
				label: "cigomatico menor",
				aliases: ["zigomatico menor", "cigomatico mayor y menor", "cigomaticos"]
			},
			{
				label: "elevador labio superior",
				aliases: ["elevador del labio superior", "musculo elevador labial"]
			},
			{ label: "piramidal", aliases: ["procer", "musculo piramidal"] },
			{ label: "cuadrado del menton", aliases: ["cuadrado mentoniano", "mentoniano"] }
		]
	}
];
