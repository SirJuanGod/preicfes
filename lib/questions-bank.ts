// AUTO-GENERADO desde questions_bank.py — banco vocacional (8 competencias, 320 preguntas)
// No editar a mano; regenerar desde el script si cambia el banco.

export type Nivel = "basica" | "intermedia" | "avanzada"
export type Contexto = "estudiante" | "profesional" | "general"
export type CompetenciaId =
  | "análisis_cuantitativo"
  | "comunicación"
  | "pensamiento_crítico"
  | "liderazgo"
  | "creatividad"
  | "atención_detalle"
  | "visualización_espacial"
  | "estabilidad_emocional"

export interface Pregunta {
  id: string
  texto: string
  nivel: Nivel
  contexto: Contexto[]
  competencia: CompetenciaId
  peso: number
}

export const COMPETENCIA_LABELS: Record<CompetenciaId, string> = {
  "análisis_cuantitativo": "Análisis Cuantitativo",
  "comunicación": "Comunicación",
  "pensamiento_crítico": "Pensamiento Crítico",
  "liderazgo": "Liderazgo",
  "creatividad": "Creatividad",
  "atención_detalle": "Atención al Detalle",
  "visualización_espacial": "Visualización Espacial",
  "estabilidad_emocional": "Estabilidad Emocional",
}

export const PREGUNTAS: Pregunta[] = [
  {
    "id": "análisis_cuantitativo_0",
    "texto": "¿Disfrutas resolver problemas matemáticos o acertijos numéricos?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1
  },
  {
    "id": "análisis_cuantitativo_1",
    "texto": "¿Te resulta fácil trabajar con números y cálculos en tu día a día?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1
  },
  {
    "id": "análisis_cuantitativo_2",
    "texto": "¿Prefieres materias como matemáticas o física sobre letras?",
    "nivel": "basica",
    "contexto": [
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.2
  },
  {
    "id": "análisis_cuantitativo_3",
    "texto": "¿Encuentras placer en descubrir patrones en series de números?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1
  },
  {
    "id": "análisis_cuantitativo_4",
    "texto": "¿Puedes calcular propinas, descuentos o porcentajes mentalmente con facilidad?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 0.8
  },
  {
    "id": "análisis_cuantitativo_5",
    "texto": "¿Te gustaría trabajar en algo que implique estadísticas o análisis de datos?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.1
  },
  {
    "id": "análisis_cuantitativo_6",
    "texto": "¿Disfrutas los juegos de lógica como sudoku, ajedrez o rompecabezas numéricos?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 0.9
  },
  {
    "id": "análisis_cuantitativo_7",
    "texto": "¿Entiendes bien los gráficos y tablas de datos cuando los ves en una presentación?",
    "nivel": "basica",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 0.9
  },
  {
    "id": "análisis_cuantitativo_8",
    "texto": "¿Administras bien tu dinero personal haciendo cálculos y presupuestos?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 0.7
  },
  {
    "id": "análisis_cuantitativo_9",
    "texto": "¿Te gusta la idea de analizar datos para encontrar tendencias o respuestas?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.1
  },
  {
    "id": "análisis_cuantitativo_10",
    "texto": "¿Cuando enfrentas un problema, buscas datos y métricas antes de decidir?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.3
  },
  {
    "id": "análisis_cuantitativo_11",
    "texto": "¿Te sientes cómodo interpretando resultados estadísticos o reportes numéricos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.3
  },
  {
    "id": "análisis_cuantitativo_12",
    "texto": "¿Puedes estimar con precisión costos, tiempos o recursos necesarios para un proyecto?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.2
  },
  {
    "id": "análisis_cuantitativo_13",
    "texto": "¿Utilizas hojas de cálculo, modelos o fórmulas para organizar información?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.2
  },
  {
    "id": "análisis_cuantitativo_14",
    "texto": "¿Entiendes conceptos como probabilidad, correlación o regresión con relativa facilidad?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.4
  },
  {
    "id": "análisis_cuantitativo_15",
    "texto": "¿Puedes identificar errores en cálculos o datos inconsistentes rápidamente?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.3
  },
  {
    "id": "análisis_cuantitativo_16",
    "texto": "¿Has aplicado alguna vez modelos matemáticos para resolver un problema real?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.4
  },
  {
    "id": "análisis_cuantitativo_17",
    "texto": "¿Disfrutas optimizar procesos buscando la solución más eficiente numéricamente?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.3
  },
  {
    "id": "análisis_cuantitativo_18",
    "texto": "¿Te resulta natural pensar en términos de variables, ecuaciones o funciones?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.4
  },
  {
    "id": "análisis_cuantitativo_19",
    "texto": "¿Puedes leer y entender estados financieros o balances contables básicos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1
  },
  {
    "id": "análisis_cuantitativo_20",
    "texto": "¿Puedes construir un modelo predictivo básico con los datos disponibles?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_21",
    "texto": "¿Sabes interpretar valores como p-value, desviación estándar o intervalos de confianza?",
    "nivel": "avanzada",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_22",
    "texto": "¿Has aplicado algoritmos o técnicas matemáticas para resolver problemas complejos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_23",
    "texto": "¿Podrías diseñar un experimento con controles estadísticos para validar una hipótesis?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_24",
    "texto": "¿Te sientes capaz de programar o automatizar análisis de grandes volúmenes de datos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_25",
    "texto": "¿Puedes optimizar funciones matemáticas o resolver problemas de programación lineal?",
    "nivel": "avanzada",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_26",
    "texto": "¿Entiendes la diferencia entre correlación y causalidad y cómo evitar confundirlas?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.4
  },
  {
    "id": "análisis_cuantitativo_27",
    "texto": "¿Puedes diseñar dashboards o reportes analíticos que cuenten una historia con datos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.4
  },
  {
    "id": "análisis_cuantitativo_28",
    "texto": "¿Aplicarías técnicas de machine learning para resolver un problema de clasificación?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_29",
    "texto": "¿Puedes derivar insights accionables a partir de datos crudos y desordenados?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.5
  },
  {
    "id": "análisis_cuantitativo_30",
    "texto": "¿Prefieres trabajar con hechos concretos y datos verificables antes que con suposiciones?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 0.9
  },
  {
    "id": "análisis_cuantitativo_31",
    "texto": "¿Cuando compras algo, comparas precios y calculas si vale la pena la relación costo-beneficio?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 0.7
  },
  {
    "id": "análisis_cuantitativo_32",
    "texto": "¿Te resulta natural descomponer un problema grande en subproblemas más pequeños y manejables?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.2
  },
  {
    "id": "análisis_cuantitativo_33",
    "texto": "¿Podrías explicar con datos por qué una decisión específica es mejor que otra alternativa?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.3
  },
  {
    "id": "análisis_cuantitativo_34",
    "texto": "¿Sientes curiosidad por la razón matemática detrás de fenómenos del mundo real?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.1
  },
  {
    "id": "análisis_cuantitativo_35",
    "texto": "¿Puedes estimar la magnitud de un resultado sin necesidad de calcularlo exactamente?",
    "nivel": "intermedia",
    "contexto": [
      "general",
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.2
  },
  {
    "id": "análisis_cuantitativo_36",
    "texto": "¿Verificas tus cálculos o resultados de formas alternativas para asegurarte de su corrección?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.3
  },
  {
    "id": "análisis_cuantitativo_37",
    "texto": "¿Entiendes cómo funciona el interés compuesto y sus implicaciones a largo plazo?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 0.9
  },
  {
    "id": "análisis_cuantitativo_38",
    "texto": "¿Disfrutas participar en competencias de matemáticas o resolución de problemas?",
    "nivel": "basica",
    "contexto": [
      "estudiante"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1.2
  },
  {
    "id": "análisis_cuantitativo_39",
    "texto": "¿Te imaginas trabajando en finanzas cuantitativas, ingeniería o ciencia de datos?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "análisis_cuantitativo",
    "peso": 1
  },
  {
    "id": "comunicación_0",
    "texto": "¿Te expresas con facilidad y claridad cuando hablas en público?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional",
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1
  },
  {
    "id": "comunicación_1",
    "texto": "¿Disfrutas tener conversaciones largas y profundas con otras personas?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 0.9
  },
  {
    "id": "comunicación_2",
    "texto": "¿Te resulta fácil escribir correos, cartas o textos claros y bien organizados?",
    "nivel": "basica",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "comunicación",
    "peso": 1
  },
  {
    "id": "comunicación_3",
    "texto": "¿Escuchas activamente a los demás antes de dar tu opinión?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 0.9
  },
  {
    "id": "comunicación_4",
    "texto": "¿Disfrutas leer libros, artículos o noticias habitualmente?",
    "nivel": "basica",
    "contexto": [
      "general",
      "estudiante"
    ],
    "competencia": "comunicación",
    "peso": 0.8
  },
  {
    "id": "comunicación_5",
    "texto": "¿Puedes explicar un concepto difícil de forma simple para que cualquiera lo entienda?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.1
  },
  {
    "id": "comunicación_6",
    "texto": "¿Te sientes cómodo siendo el portavoz de tu grupo en presentaciones o reuniones?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.1
  },
  {
    "id": "comunicación_7",
    "texto": "¿Recuerdas fácilmente lo que te dicen en conversaciones sin necesitar tomar notas?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 0.8
  },
  {
    "id": "comunicación_8",
    "texto": "¿Disfrutas escribir: historias, ensayos, blogs o redes sociales con contenido elaborado?",
    "nivel": "basica",
    "contexto": [
      "general",
      "estudiante"
    ],
    "competencia": "comunicación",
    "peso": 0.9
  },
  {
    "id": "comunicación_9",
    "texto": "¿La gente suele entender tus instrucciones o explicaciones al primer intento?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1
  },
  {
    "id": "comunicación_10",
    "texto": "¿Puedes adaptar tu estilo de comunicación según el tipo de audiencia que tienes?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.3
  },
  {
    "id": "comunicación_11",
    "texto": "¿Manejas bien el lenguaje no verbal: postura, contacto visual y gestos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.2
  },
  {
    "id": "comunicación_12",
    "texto": "¿Puedes persuadir o convencer a alguien con argumentos bien estructurados?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.3
  },
  {
    "id": "comunicación_13",
    "texto": "¿Medias bien en conflictos, ayudando a las partes a encontrar un punto en común?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.2
  },
  {
    "id": "comunicación_14",
    "texto": "¿Puedes estructurar una presentación para que fluya de forma lógica y convincente?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "comunicación",
    "peso": 1.3
  },
  {
    "id": "comunicación_15",
    "texto": "¿Sabes dar feedback constructivo sin ofender ni desmotivar a la otra persona?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.4
  },
  {
    "id": "comunicación_16",
    "texto": "¿Disfrutas hacer entrevistas, podcasts o participar en debates?",
    "nivel": "intermedia",
    "contexto": [
      "general",
      "estudiante"
    ],
    "competencia": "comunicación",
    "peso": 1.1
  },
  {
    "id": "comunicación_17",
    "texto": "¿Escribes con precisión técnica cuando el tema lo requiere (informes, reportes)?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.3
  },
  {
    "id": "comunicación_18",
    "texto": "¿Puedes hacer preguntas que abren conversaciones profundas y reveladoras?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.2
  },
  {
    "id": "comunicación_19",
    "texto": "¿Adaptas tu vocabulario según si hablas con un experto o con alguien sin conocimiento?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.3
  },
  {
    "id": "comunicación_20",
    "texto": "¿Puedes escribir artículos de opinión, reportajes o ensayos argumentativos de calidad?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "comunicación",
    "peso": 1.5
  },
  {
    "id": "comunicación_21",
    "texto": "¿Dominas técnicas de oratoria como el storytelling, el uso de pausas o el manejo del miedo escénico?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.5
  },
  {
    "id": "comunicación_22",
    "texto": "¿Puedes comunicar ideas complejas en formatos visuales como infografías o presentaciones ejecutivas?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.4
  },
  {
    "id": "comunicación_23",
    "texto": "¿Sabes cómo manejar una comunicación de crisis para minimizar daños en la reputación?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.5
  },
  {
    "id": "comunicación_24",
    "texto": "¿Has publicado, presentado o comunicado tu trabajo formalmente ante una audiencia crítica?",
    "nivel": "avanzada",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.5
  },
  {
    "id": "comunicación_25",
    "texto": "¿Puedes detectar cuando alguien no está siendo completamente honesto en una conversación?",
    "nivel": "avanzada",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.3
  },
  {
    "id": "comunicación_26",
    "texto": "¿Puedes hablar con igual comodidad con el CEO de una empresa y con el personal operativo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.5
  },
  {
    "id": "comunicación_27",
    "texto": "¿Diseñas estrategias de comunicación para proyectos, campañas o lanzamientos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.5
  },
  {
    "id": "comunicación_28",
    "texto": "¿Puedes entrevistar a alguien y extraer la información más relevante de forma eficiente?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.4
  },
  {
    "id": "comunicación_29",
    "texto": "¿Traduces jerga técnica en lenguaje accesible para audiencias no especializadas?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.4
  },
  {
    "id": "comunicación_30",
    "texto": "¿Tus amigos o colegas te buscan para hablar sobre sus problemas o pedir consejo?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 0.9
  },
  {
    "id": "comunicación_31",
    "texto": "¿Puedes mantener la coherencia y el hilo en conversaciones largas y complejas?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.1
  },
  {
    "id": "comunicación_32",
    "texto": "¿Sientes pasión por los idiomas, la literatura o la lingüística?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "comunicación",
    "peso": 0.9
  },
  {
    "id": "comunicación_33",
    "texto": "¿Puedes resumir en pocas palabras una idea que otros tardan mucho en explicar?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.2
  },
  {
    "id": "comunicación_34",
    "texto": "¿Has recibido comentarios positivos sobre tu forma de hablar, escribir o presentar?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 0.9
  },
  {
    "id": "comunicación_35",
    "texto": "¿Disfrutas el proceso de revisar y mejorar un texto que has escrito?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.1
  },
  {
    "id": "comunicación_36",
    "texto": "¿Puedes narrar eventos o historias de forma que capture la atención del oyente?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.2
  },
  {
    "id": "comunicación_37",
    "texto": "¿Te imaginas en roles como periodista, abogado, docente o comunicador?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1
  },
  {
    "id": "comunicación_38",
    "texto": "¿Puedes manejar con calma una conversación difícil o emocionalmente cargada?",
    "nivel": "avanzada",
    "contexto": [
      "general"
    ],
    "competencia": "comunicación",
    "peso": 1.4
  },
  {
    "id": "comunicación_39",
    "texto": "¿Sabes cuándo es mejor escuchar que hablar en una situación profesional?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "comunicación",
    "peso": 1.2
  },
  {
    "id": "pensamiento_crítico_0",
    "texto": "¿Cuestionas la información que recibes antes de aceptarla como verdadera?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1
  },
  {
    "id": "pensamiento_crítico_1",
    "texto": "¿Buscas la fuente original de una noticia o dato antes de compartirlo?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 0.9
  },
  {
    "id": "pensamiento_crítico_2",
    "texto": "¿Analizas los pros y contras antes de tomar una decisión importante?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1
  },
  {
    "id": "pensamiento_crítico_3",
    "texto": "¿Puedes identificar cuándo un argumento tiene fallas lógicas o contradicciones?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.2
  },
  {
    "id": "pensamiento_crítico_4",
    "texto": "¿Disfrutas los debates de ideas donde se confrontan diferentes puntos de vista?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1
  },
  {
    "id": "pensamiento_crítico_5",
    "texto": "¿Te sientes incómodo cuando alguien acepta una afirmación sin evidencia suficiente?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.1
  },
  {
    "id": "pensamiento_crítico_6",
    "texto": "¿Eres capaz de ver un problema desde múltiples perspectivas antes de juzgar?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1
  },
  {
    "id": "pensamiento_crítico_7",
    "texto": "¿Preguntas el 'por qué' detrás de las reglas, normas o afirmaciones frecuentemente?",
    "nivel": "basica",
    "contexto": [
      "general",
      "estudiante"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1
  },
  {
    "id": "pensamiento_crítico_8",
    "texto": "¿Evalúas las suposiciones ocultas en los argumentos que te presentan?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.2
  },
  {
    "id": "pensamiento_crítico_9",
    "texto": "¿Distingues claramente entre hechos, opiniones e interpretaciones?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.1
  },
  {
    "id": "pensamiento_crítico_10",
    "texto": "¿Puedes encontrar sesgos cognitivos en artículos, noticias o discursos?",
    "nivel": "intermedia",
    "contexto": [
      "general",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_11",
    "texto": "¿Evalúas la credibilidad de una fuente de información con criterios objetivos?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.3
  },
  {
    "id": "pensamiento_crítico_12",
    "texto": "¿Puedes construir un contraargumento sólido ante una posición que no compartes?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_13",
    "texto": "¿Descompones problemas complejos en partes más simples para analizarlos mejor?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.3
  },
  {
    "id": "pensamiento_crítico_14",
    "texto": "¿Cuestionas tus propias creencias cuando encuentras evidencia que las contradice?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_15",
    "texto": "¿Puedes formular hipótesis y diseñar cómo ponerlas a prueba?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_16",
    "texto": "¿Diferencias entre correlación y causalidad en un análisis de datos?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_17",
    "texto": "¿Reconoces cuando alguien usa falacias lógicas para defender su posición?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_18",
    "texto": "¿Reflexionas sobre el impacto de largo plazo de las decisiones que tomas hoy?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.2
  },
  {
    "id": "pensamiento_crítico_19",
    "texto": "¿Buscas la perspectiva de los afectados antes de emitir juicio sobre una situación?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.2
  },
  {
    "id": "pensamiento_crítico_20",
    "texto": "¿Puedes deconstruir un argumento filosófico o político identificando sus premisas?",
    "nivel": "avanzada",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_21",
    "texto": "¿Aplicas el pensamiento bayesiano para actualizar tus creencias con nueva evidencia?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_22",
    "texto": "¿Has refutado públicamente una idea incorrecta con argumentos bien fundamentados?",
    "nivel": "avanzada",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_23",
    "texto": "¿Puedes evaluar el riesgo de una decisión con información incompleta?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_24",
    "texto": "¿Diseñas experimentos mentales para probar la validez de una teoría o supuesto?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_25",
    "texto": "¿Identificas cuando un modelo o teoría simplifica demasiado la realidad?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_26",
    "texto": "¿Sabes cuándo es válido generalizar a partir de un caso y cuándo no?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_27",
    "texto": "¿Puedes redactar un ensayo argumentativo con tesis, antítesis y síntesis?",
    "nivel": "avanzada",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_28",
    "texto": "¿Detectas manipulación estadística o mal uso de datos en reportes oficiales?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.5
  },
  {
    "id": "pensamiento_crítico_29",
    "texto": "¿Puedes defender una posición con la que no estás de acuerdo solo para ejercitar el pensamiento?",
    "nivel": "avanzada",
    "contexto": [
      "estudiante"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_30",
    "texto": "¿Piensas en las consecuencias de segundo y tercer orden de una decisión?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.3
  },
  {
    "id": "pensamiento_crítico_31",
    "texto": "¿Te aburres de conversaciones superficiales y prefieres discutir ideas profundas?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 0.8
  },
  {
    "id": "pensamiento_crítico_32",
    "texto": "¿Cuando ves una estadística, piensas en cómo podría estar sesgada o mal interpretada?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.3
  },
  {
    "id": "pensamiento_crítico_33",
    "texto": "¿Te cuestiones tus propios prejuicios al analizar situaciones sociales o políticas?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.2
  },
  {
    "id": "pensamiento_crítico_34",
    "texto": "¿Lees o estudias sobre filosofía, epistemología o lógica formal?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 0.9
  },
  {
    "id": "pensamiento_crítico_35",
    "texto": "¿Puedes identificar en qué momento de un problema estás en el nivel correcto de abstracción?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_36",
    "texto": "¿Prefieres entender el 'por qué' de algo en profundidad que memorizar su funcionamiento?",
    "nivel": "basica",
    "contexto": [
      "estudiante"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1
  },
  {
    "id": "pensamiento_crítico_37",
    "texto": "¿Has cambiado de opinión sobre algo importante a raíz de evidencia o argumentos nuevos?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.2
  },
  {
    "id": "pensamiento_crítico_38",
    "texto": "¿Puedes anticipar las objeciones que alguien tendría a tu propuesta antes de presentarla?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.4
  },
  {
    "id": "pensamiento_crítico_39",
    "texto": "¿Distingues entre lo que es verdad, lo que parece verdad y lo que queremos que sea verdad?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "pensamiento_crítico",
    "peso": 1.3
  },
  {
    "id": "liderazgo_0",
    "texto": "¿Sueles tomar la iniciativa en proyectos grupales sin que te lo pidan?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1
  },
  {
    "id": "liderazgo_1",
    "texto": "¿Te sientes cómodo tomando decisiones que afectan a otros?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1.1
  },
  {
    "id": "liderazgo_2",
    "texto": "¿Tus compañeros o colegas te buscan para orientarlos cuando hay un problema?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1
  },
  {
    "id": "liderazgo_3",
    "texto": "¿Disfrutas organizar y coordinar grupos de personas hacia un objetivo?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1
  },
  {
    "id": "liderazgo_4",
    "texto": "¿Has liderado algún proyecto, equipo, club o grupo formalmente?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.2
  },
  {
    "id": "liderazgo_5",
    "texto": "¿Puedes motivar a personas desanimadas para que retomen el trabajo con energía?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1.1
  },
  {
    "id": "liderazgo_6",
    "texto": "¿Te sientes cómodo siendo el punto de referencia cuando las cosas van mal?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_7",
    "texto": "¿Tomas decisiones difíciles con calma incluso bajo presión y con información limitada?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_8",
    "texto": "¿Estableces metas claras y haces seguimiento al cumplimiento de tu equipo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_9",
    "texto": "¿Puedes delegar tareas confiando en que los demás las harán bien?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_10",
    "texto": "¿Manejas bien los conflictos internos dentro de un equipo de trabajo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_11",
    "texto": "¿Reconoces y aprovechas las fortalezas individuales de cada miembro de tu equipo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_12",
    "texto": "¿Puedes cambiar el rumbo de un proyecto sin que el equipo pierda la motivación?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_13",
    "texto": "¿Has gestionado un equipo multidisciplinario con perfiles muy distintos al tuyo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_14",
    "texto": "¿Eres capaz de sostener una visión a largo plazo y hacer que otros la adopten?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_15",
    "texto": "¿Puedes negociar y alcanzar acuerdos donde todas las partes ganan algo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_16",
    "texto": "¿Has fundado, emprendido o creado algo con un equipo desde cero?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_17",
    "texto": "¿Puedes rendir cuentas sobre los resultados de tu equipo ante superiores o stakeholders?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_18",
    "texto": "¿Tienes experiencia mentoreando a personas menos expertas que tú?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_19",
    "texto": "¿Distingues entre ser un jefe (poder formal) y ser un líder (influencia real)?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1.2
  },
  {
    "id": "liderazgo_20",
    "texto": "¿Te postulas voluntariamente para liderar cuando otros dudan en hacerlo?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1.1
  },
  {
    "id": "liderazgo_21",
    "texto": "¿Construyes coaliciones y alianzas para lograr objetivos que solo no podrías alcanzar?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_22",
    "texto": "¿Generas confianza en tu equipo siendo consistente entre lo que dices y haces?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_23",
    "texto": "¿Asumes la responsabilidad cuando algo sale mal en lugar de culpar a los demás?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_24",
    "texto": "¿Creas ambientes donde las personas se sienten seguras de expresar ideas nuevas?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_25",
    "texto": "¿Identificas y desarrollas el potencial de personas que otros pasan por alto?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_26",
    "texto": "¿Sabes cuándo ceder el control y dejar que otros decidan sin intervenir?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_27",
    "texto": "¿Gestionas bien el tiempo y las prioridades cuando tienes múltiples responsabilidades?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.2
  },
  {
    "id": "liderazgo_28",
    "texto": "¿Has representado a tu comunidad, escuela o empresa ante entidades externas?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.2
  },
  {
    "id": "liderazgo_29",
    "texto": "¿Mantienes la calma y transmites seguridad en situaciones de crisis o incertidumbre?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_30",
    "texto": "¿Las personas que han trabajado contigo te describirían como un referente?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_31",
    "texto": "¿Mides el éxito de tu liderazgo por el crecimiento de los demás, no solo por los tuyos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_32",
    "texto": "¿Adaptas tu estilo de liderazgo según la madurez y experiencia de cada persona?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_33",
    "texto": "¿Te sientes responsable del bienestar emocional de tu equipo además del productivo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.2
  },
  {
    "id": "liderazgo_34",
    "texto": "¿Tienes claro cuál es tu propósito como líder y por qué quieres serlo?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "liderazgo",
    "peso": 1
  },
  {
    "id": "liderazgo_35",
    "texto": "¿Haces seguimiento al desarrollo profesional y personal de quienes trabajan contigo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.4
  },
  {
    "id": "liderazgo_36",
    "texto": "¿Equilibras la presión por resultados con el respeto por el bienestar de tu equipo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_37",
    "texto": "¿Comunicas el impacto de las tareas individuales con la misión general del equipo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.3
  },
  {
    "id": "liderazgo_38",
    "texto": "¿Manejas bien la ambigüedad: actúas con decisión cuando no hay una respuesta clara?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "liderazgo_39",
    "texto": "¿Eres capaz de influenciar positivamente a personas que no dependen jerárquicamente de ti?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "liderazgo",
    "peso": 1.5
  },
  {
    "id": "creatividad_0",
    "texto": "¿Disfrutas actividades artísticas como dibujar, pintar, escribir o hacer música?",
    "nivel": "basica",
    "contexto": [
      "general",
      "estudiante"
    ],
    "competencia": "creatividad",
    "peso": 1
  },
  {
    "id": "creatividad_1",
    "texto": "¿Se te ocurren soluciones originales a problemas cuando los métodos convencionales fallan?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.1
  },
  {
    "id": "creatividad_2",
    "texto": "¿Tienes una afición creativa como fotografía, diseño, cocina o artesanía?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 0.9
  },
  {
    "id": "creatividad_3",
    "texto": "¿Generas ideas nuevas con facilidad cuando llueven ideas en un grupo?",
    "nivel": "basica",
    "contexto": [
      "general",
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1
  },
  {
    "id": "creatividad_4",
    "texto": "¿Encuentras conexiones interesantes entre ideas que aparentemente no se relacionan?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.3
  },
  {
    "id": "creatividad_5",
    "texto": "¿Sueles imaginar cómo podrían mejorarse los productos o servicios que usas?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1
  },
  {
    "id": "creatividad_6",
    "texto": "¿Disfrutas explorar formas inusuales de hacer cosas cotidianas?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 0.9
  },
  {
    "id": "creatividad_7",
    "texto": "¿Prefieres resolver problemas con métodos poco convencionales?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.2
  },
  {
    "id": "creatividad_8",
    "texto": "¿Tienes una estética personal desarrollada en tu forma de vestir, decorar o crear contenido?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 0.8
  },
  {
    "id": "creatividad_9",
    "texto": "¿Cuándo diseñas algo, te preocupas tanto por la forma como por la función?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1
  },
  {
    "id": "creatividad_10",
    "texto": "¿Puedes generar 10 ideas diferentes para resolver el mismo problema en poco tiempo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.3
  },
  {
    "id": "creatividad_11",
    "texto": "¿Combinas ideas de campos diferentes para crear algo nuevo y original?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.4
  },
  {
    "id": "creatividad_12",
    "texto": "¿Transformas limitaciones en oportunidades creativas en lugar de verlas como obstáculos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_13",
    "texto": "¿Has creado algo (proyecto, diseño, historia, producto) que otros encontraron valioso?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.3
  },
  {
    "id": "creatividad_14",
    "texto": "¿Eres capaz de visualizar el resultado final de algo que aún no existe?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.3
  },
  {
    "id": "creatividad_15",
    "texto": "¿Disfrutas el proceso creativo tanto como el resultado final?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 0.9
  },
  {
    "id": "creatividad_16",
    "texto": "¿Tomas inspiración de fuentes inesperadas: naturaleza, arte, ciencia, historia?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.1
  },
  {
    "id": "creatividad_17",
    "texto": "¿Puedes iterar y mejorar un diseño o idea múltiples veces sin perder la motivación?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.4
  },
  {
    "id": "creatividad_18",
    "texto": "¿Eres capaz de defender una idea creativa ante audiencias escépticas o conservadoras?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_19",
    "texto": "¿Utilizas la creatividad como herramienta estratégica para diferenciar tu trabajo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_20",
    "texto": "¿Puedes crear una identidad visual o narrativa coherente para un proyecto?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_21",
    "texto": "¿Experimentas con nuevas técnicas o herramientas en tu campo constantemente?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "creatividad",
    "peso": 1.3
  },
  {
    "id": "creatividad_22",
    "texto": "¿Conviertes conceptos abstractos en experiencias concretas y tangibles?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_23",
    "texto": "¿Tu curiosidad natural te lleva a explorar temas fuera de tu área de especialización?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1
  },
  {
    "id": "creatividad_24",
    "texto": "¿Buscas inspiración activamente: museos, viajes, libros, conversaciones con expertos?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.1
  },
  {
    "id": "creatividad_25",
    "texto": "¿Puedes trabajar creativamente bajo presión de tiempo o con recursos limitados?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.4
  },
  {
    "id": "creatividad_26",
    "texto": "¿La ambigüedad de un problema creativo te estimula en lugar de estresarte?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.4
  },
  {
    "id": "creatividad_27",
    "texto": "¿Tienes proyectos personales creativos que desarrollas por puro placer?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 0.9
  },
  {
    "id": "creatividad_28",
    "texto": "¿Ves el error como una oportunidad de aprendizaje y rediseño, no como un fracaso?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.2
  },
  {
    "id": "creatividad_29",
    "texto": "¿Introduces elementos de sorpresa o novedad en tu trabajo para mantener el interés?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.3
  },
  {
    "id": "creatividad_30",
    "texto": "¿Puedes diseñar la experiencia de usuario de un producto pensando en sus emociones?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_31",
    "texto": "¿Generas metáforas o analogías para explicar conceptos difíciles de forma memorable?",
    "nivel": "intermedia",
    "contexto": [
      "general",
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.2
  },
  {
    "id": "creatividad_32",
    "texto": "¿Contribuyes ideas originales en reuniones que cambian la dirección de la conversación?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_33",
    "texto": "¿Te imaginas trabajando en campos como diseño, publicidad, cine, moda o arquitectura?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1
  },
  {
    "id": "creatividad_34",
    "texto": "¿Produces contenido creativo de forma regular: videos, ilustraciones, escritura, música?",
    "nivel": "intermedia",
    "contexto": [
      "general",
      "estudiante"
    ],
    "competencia": "creatividad",
    "peso": 1.1
  },
  {
    "id": "creatividad_35",
    "texto": "¿Puedes hacer que algo ordinario se vea o suene extraordinario?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.4
  },
  {
    "id": "creatividad_36",
    "texto": "¿Niegas la premisa de un problema para imaginar soluciones radicalmente diferentes?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.5
  },
  {
    "id": "creatividad_37",
    "texto": "¿Mezclas disciplinas (arte + tecnología, ciencia + humanidades) en tu forma de pensar?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.3
  },
  {
    "id": "creatividad_38",
    "texto": "¿Dibujas, esbozas o usas mapas mentales para dar forma a tus ideas antes de actuar?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "creatividad",
    "peso": 1.1
  },
  {
    "id": "creatividad_39",
    "texto": "¿Puedes crear algo hermoso y funcional al mismo tiempo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "creatividad",
    "peso": 1.4
  },
  {
    "id": "atención_detalle_0",
    "texto": "¿Revisas tu trabajo cuidadosamente antes de entregarlo o enviarlo?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 1
  },
  {
    "id": "atención_detalle_1",
    "texto": "¿Detectas errores ortográficos o de formato en textos que otros no notan?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 1.1
  },
  {
    "id": "atención_detalle_2",
    "texto": "¿Sigues instrucciones complejas paso a paso sin saltarte ninguno?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 1
  },
  {
    "id": "atención_detalle_3",
    "texto": "¿Tienes un sistema organizado para archivar, clasificar o nombrar archivos y documentos?",
    "nivel": "basica",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 0.9
  },
  {
    "id": "atención_detalle_4",
    "texto": "¿Te molesta cuando algo no está perfectamente terminado o bien hecho?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 0.9
  },
  {
    "id": "atención_detalle_5",
    "texto": "¿Puedes encontrar inconsistencias en contratos, formularios o documentos legales?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_6",
    "texto": "¿Mantienes registros detallados de tus tareas, proyectos y compromisos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.2
  },
  {
    "id": "atención_detalle_7",
    "texto": "¿Detectas cuando una fórmula en una hoja de cálculo tiene un error sutil?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_8",
    "texto": "¿Puedes verificar con precisión datos entre dos documentos o bases de datos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_9",
    "texto": "¿Documentas los procesos que realizas para que otros puedan reproducirlos exactamente?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_10",
    "texto": "¿Escribes con cero errores ortográficos, gramaticales o de puntuación habitualmente?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 1
  },
  {
    "id": "atención_detalle_11",
    "texto": "¿Verificas dos veces los resultados de tus cálculos o análisis antes de concluir?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.2
  },
  {
    "id": "atención_detalle_12",
    "texto": "¿Puedes garantizar la calidad de un proceso complejo ejecutado por un equipo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_13",
    "texto": "¿Diseñas listas de verificación (checklists) para evitar omisiones en procesos críticos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.4
  },
  {
    "id": "atención_detalle_14",
    "texto": "¿Encuentras satisfacción en el trabajo bien hecho hasta en sus detalles más pequeños?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 1
  },
  {
    "id": "atención_detalle_15",
    "texto": "¿Puedes auditar un proceso para encontrar el punto exacto donde ocurrió un fallo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_16",
    "texto": "¿Realizas pruebas y validaciones antes de declarar que algo está terminado?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_17",
    "texto": "¿Estableces estándares de calidad para tu propio trabajo y los mantienes siempre?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.4
  },
  {
    "id": "atención_detalle_18",
    "texto": "¿Puedes gestionar proyectos con muchas variables interdependientes sin perder el hilo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_19",
    "texto": "¿Identificas patrones inusuales en datos o comportamientos que sugieren un problema oculto?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_20",
    "texto": "¿Tienes la disciplina de cumplir con plazos y compromisos sin necesitar supervisión externa?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 1.2
  },
  {
    "id": "atención_detalle_21",
    "texto": "¿Puedes construir un informe sin errores de ningún tipo (datos, formato, ortografía)?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.4
  },
  {
    "id": "atención_detalle_22",
    "texto": "¿Lees los términos y condiciones de documentos importantes antes de firmar?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 0.8
  },
  {
    "id": "atención_detalle_23",
    "texto": "¿Categorizas y etiquetas información de forma que sea fácilmente recuperable después?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.2
  },
  {
    "id": "atención_detalle_24",
    "texto": "¿Puedes reproducir un resultado exacto siguiendo un protocolo establecido al detalle?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_25",
    "texto": "¿Mantienes un registro de errores pasados para no volver a cometerlos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_26",
    "texto": "¿Compruebas que las unidades de medida son consistentes en análisis o documentos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.2
  },
  {
    "id": "atención_detalle_27",
    "texto": "¿Prefieres hacer las cosas bien a la primera que hacerlas rápido y corregir después?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 1
  },
  {
    "id": "atención_detalle_28",
    "texto": "¿Validas que los supuestos de un análisis son correctos antes de presentar resultados?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_29",
    "texto": "¿Redactas especificaciones técnicas o funcionales con suficiente detalle para evitar malentendidos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_30",
    "texto": "¿Detectas cuando un proceso tiene pasos redundantes o innecesarios y los eliminas?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_31",
    "texto": "¿Controlas la calidad del trabajo de otros con criterios claros y objetivos?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_32",
    "texto": "¿Usas plantillas, marcos de referencia o metodologías para estructurar tu trabajo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.2
  },
  {
    "id": "atención_detalle_33",
    "texto": "¿Puedes detectar una discrepancia entre lo que se prometió y lo que se entregó?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.3
  },
  {
    "id": "atención_detalle_34",
    "texto": "¿Cuidas la presentación visual y estética de tus entregas, no solo su contenido?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 0.9
  },
  {
    "id": "atención_detalle_35",
    "texto": "¿Documentas las excepciones y casos especiales de un proceso para futura referencia?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.4
  },
  {
    "id": "atención_detalle_36",
    "texto": "¿Verificas que las referencias bibliográficas, citas o fuentes son correctas y completas?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante"
    ],
    "competencia": "atención_detalle",
    "peso": 1.2
  },
  {
    "id": "atención_detalle_37",
    "texto": "¿Notas cuando algo ha cambiado en tu entorno que otros no detectan?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "atención_detalle",
    "peso": 0.9
  },
  {
    "id": "atención_detalle_38",
    "texto": "¿Puedes describir un proceso complejo con la suficiente precisión para que otro lo ejecute sin ayuda?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 1.5
  },
  {
    "id": "atención_detalle_39",
    "texto": "¿Tienes el hábito de revisar tus correos electrónicos antes de enviarlos?",
    "nivel": "basica",
    "contexto": [
      "profesional"
    ],
    "competencia": "atención_detalle",
    "peso": 0.8
  },
  {
    "id": "visualización_espacial_0",
    "texto": "¿Se te facilita leer mapas, planos o diagramas técnicos?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1
  },
  {
    "id": "visualización_espacial_1",
    "texto": "¿Puedes armar muebles u objetos siguiendo solo instrucciones con imágenes?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 0.9
  },
  {
    "id": "visualización_espacial_2",
    "texto": "¿Visualizas fácilmente cómo quedará un espacio redecorado antes de moverlo?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1
  },
  {
    "id": "visualización_espacial_3",
    "texto": "¿Puedes imaginar un objeto en 3D y rotarlo mentalmente sin ayuda de modelos físicos?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.4
  },
  {
    "id": "visualización_espacial_4",
    "texto": "¿Entiendes planos de construcción o arquitectónicos sin dificultad?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.3
  },
  {
    "id": "visualización_espacial_5",
    "texto": "¿Te orientas con facilidad en ciudades o espacios desconocidos?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 0.8
  },
  {
    "id": "visualización_espacial_6",
    "texto": "¿Puedes estimar dimensiones y distancias con precisión a simple vista?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 0.9
  },
  {
    "id": "visualización_espacial_7",
    "texto": "¿Disfrutas actividades como arquitectura, diseño de interiores, modelado 3D o escultura?",
    "nivel": "basica",
    "contexto": [
      "general",
      "estudiante"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.1
  },
  {
    "id": "visualización_espacial_8",
    "texto": "¿Puedes identificar cómo se vería una figura geométrica al doblarse o desplegarse?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.3
  },
  {
    "id": "visualización_espacial_9",
    "texto": "¿Puedes descomponer un objeto complejo en sus partes geométricas constituyentes?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.3
  },
  {
    "id": "visualización_espacial_10",
    "texto": "¿Usas herramientas de diseño como AutoCAD, SketchUp, Blender o similares?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_11",
    "texto": "¿Puedes diseñar un objeto funcional pensando en sus proporciones y ergonomía?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_12",
    "texto": "¿Visualizas el flujo de materiales, personas o datos en un sistema físico?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.4
  },
  {
    "id": "visualización_espacial_13",
    "texto": "¿Puedes identificar ineficiencias en la distribución física de un espacio?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_14",
    "texto": "¿Tienes facilidad para detectar errores de perspectiva o proporciones en un dibujo?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.2
  },
  {
    "id": "visualización_espacial_15",
    "texto": "¿Puedes interpretar imágenes de resonancia magnética, rayos X o imágenes satelitales?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_16",
    "texto": "¿Disfrutas los rompecabezas de encastre, tangram o puzzles tridimensionales?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 0.9
  },
  {
    "id": "visualización_espacial_17",
    "texto": "¿Puedes trazar la ruta más eficiente en un mapa sin herramientas digitales?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.1
  },
  {
    "id": "visualización_espacial_18",
    "texto": "¿Diseñas espacios, layouts o distribuciones de forma natural en tu trabajo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.3
  },
  {
    "id": "visualización_espacial_19",
    "texto": "¿Entiendes diagramas de flujo, redes o topologías de sistemas complejos?",
    "nivel": "intermedia",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.3
  },
  {
    "id": "visualización_espacial_20",
    "texto": "¿Eres bueno jugando videojuegos que requieren orientación y navegación espacial?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 0.7
  },
  {
    "id": "visualización_espacial_21",
    "texto": "¿Puedes construir un modelo a escala o prototipo físico de una idea?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_22",
    "texto": "¿Reconoces patrones visuales o anomalías en imágenes que otros no detectan?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.4
  },
  {
    "id": "visualización_espacial_23",
    "texto": "¿Piensas en términos de sistemas físicos: fuerzas, movimientos, estructuras?",
    "nivel": "intermedia",
    "contexto": [
      "estudiante",
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.3
  },
  {
    "id": "visualización_espacial_24",
    "texto": "¿Puedes hacer una maqueta o boceto que comunique claramente una idea espacial?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.4
  },
  {
    "id": "visualización_espacial_25",
    "texto": "¿Te imaginas fácilmente cómo quedaría un edificio, producto o diseño antes de construirlo?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.2
  },
  {
    "id": "visualización_espacial_26",
    "texto": "¿Entiendes cómo funciona la perspectiva y la profundidad en una imagen bidimensional?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.1
  },
  {
    "id": "visualización_espacial_27",
    "texto": "¿Puedes interpretar un plano de instalaciones eléctricas o hidráulicas?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_28",
    "texto": "¿Te imaginas en carreras como arquitectura, ingeniería civil, diseño industrial o cartografía?",
    "nivel": "basica",
    "contexto": [
      "estudiante",
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1
  },
  {
    "id": "visualización_espacial_29",
    "texto": "¿Puedes identificar qué parte de un mecanismo falla solo observando su comportamiento?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_30",
    "texto": "¿Visualizas el movimiento de un objeto en el espacio antes de que suceda?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.4
  },
  {
    "id": "visualización_espacial_31",
    "texto": "¿Dibujabas planos, mapas o diseños por entretenimiento cuando eras niño?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 0.8
  },
  {
    "id": "visualización_espacial_32",
    "texto": "¿Puedes calcular volúmenes y superficies de formas irregulares mentalmente?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.3
  },
  {
    "id": "visualización_espacial_33",
    "texto": "¿Reconoces simetrías, patrones y repeticiones en objetos y espacios físicos?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.2
  },
  {
    "id": "visualización_espacial_34",
    "texto": "¿Tienes buena coordinación mano-ojo al realizar tareas técnicas o manuales?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 0.8
  },
  {
    "id": "visualización_espacial_35",
    "texto": "¿Puedes planear la distribución de un evento o una ciudad usando solo un plano?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_36",
    "texto": "¿Entiendes diagramas de cableado, circuitos o redes sin necesitar que te los expliquen?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.5
  },
  {
    "id": "visualización_espacial_37",
    "texto": "¿Puedes navegar eficientemente en entornos de realidad virtual o 3D?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.1
  },
  {
    "id": "visualización_espacial_38",
    "texto": "¿Combinas elementos visuales de forma que el resultado sea estéticamente coherente?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.4
  },
  {
    "id": "visualización_espacial_39",
    "texto": "¿Analizas la estructura de un edificio o puente con curiosidad técnica cuando lo ves?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "visualización_espacial",
    "peso": 1.1
  },
  {
    "id": "estabilidad_emocional_0",
    "texto": "¿Mantienes la calma en situaciones de alta presión o estrés intenso?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.1
  },
  {
    "id": "estabilidad_emocional_1",
    "texto": "¿Recuperas tu estado de ánimo habitual rápidamente después de un contratiempo?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1
  },
  {
    "id": "estabilidad_emocional_2",
    "texto": "¿Puedes separar tus emociones de tus decisiones profesionales cuando es necesario?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.4
  },
  {
    "id": "estabilidad_emocional_3",
    "texto": "¿Eres consciente de cuándo tus emociones están influyendo negativamente en tu comportamiento?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_4",
    "texto": "¿Puedes continuar trabajando eficientemente incluso cuando estás bajo presión de tiempo?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_5",
    "texto": "¿Recibes críticas a tu trabajo sin ponerte a la defensiva ni perder la motivación?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.1
  },
  {
    "id": "estabilidad_emocional_6",
    "texto": "¿Puedes manejar múltiples fuentes de estrés simultáneamente sin colapsar?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_7",
    "texto": "¿Tienes estrategias concretas para manejar tu ansiedad o estrés en momentos críticos?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_8",
    "texto": "¿Terminas lo que empiezas aunque encuentres obstáculos o pierdas la motivación?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1
  },
  {
    "id": "estabilidad_emocional_9",
    "texto": "¿Te adaptas rápidamente a cambios inesperados en planes o rutinas?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1
  },
  {
    "id": "estabilidad_emocional_10",
    "texto": "¿Puedes tomar buenas decisiones cuando estás enojado, frustrado o muy emocionado?",
    "nivel": "avanzada",
    "contexto": [
      "general",
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_11",
    "texto": "¿Mantenas el optimismo y la energía positiva en proyectos de larga duración?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_12",
    "texto": "¿Evitas responder impulsivamente cuando alguien te provoca o te confronta?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_13",
    "texto": "¿Puedes trabajar efectivamente en ambientes ambiguos o con objetivos cambiantes?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_14",
    "texto": "¿Distingues entre lo que puedes controlar y lo que no, y actúas en consecuencia?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_15",
    "texto": "¿Tienes una rutina de autocuidado que te ayuda a mantener el equilibrio emocional?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 0.9
  },
  {
    "id": "estabilidad_emocional_16",
    "texto": "¿Puedes dar malas noticias a alguien con tacto y sin que afecte tu propio estado?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_17",
    "texto": "¿Eres resiliente: cuando fallas, analizas lo que salió mal y lo intentas de nuevo?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_18",
    "texto": "¿Puedes sostener largas jornadas de trabajo intenso sin perder la calidad?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.4
  },
  {
    "id": "estabilidad_emocional_19",
    "texto": "¿Manejas bien la incertidumbre: actúas con decisión aunque no tengas toda la información?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_20",
    "texto": "¿Practicas la introspección: reflexionas regularmente sobre tus reacciones emocionales?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.2
  },
  {
    "id": "estabilidad_emocional_21",
    "texto": "¿Puedes pedir ayuda sin que eso afecte tu autoestima o sensación de competencia?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1
  },
  {
    "id": "estabilidad_emocional_22",
    "texto": "¿Mantienes una actitud profesional incluso con personas que te resultan difíciles?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_23",
    "texto": "¿Puedes mantener la productividad durante semanas de alta carga sin descuidar tu salud?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_24",
    "texto": "¿Tus colegas describirían tu estado emocional como predecible y estable?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_25",
    "texto": "¿Reconoces tus puntos ciegos emocionales y trabajas activamente en ellos?",
    "nivel": "avanzada",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.4
  },
  {
    "id": "estabilidad_emocional_26",
    "texto": "¿Puedes desconectarte del trabajo al terminar la jornada sin seguir rumiando problemas?",
    "nivel": "intermedia",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.2
  },
  {
    "id": "estabilidad_emocional_27",
    "texto": "¿Encuentras significado en el trabajo difícil y eso te da energía para continuar?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.2
  },
  {
    "id": "estabilidad_emocional_28",
    "texto": "¿Eres capaz de celebrar los logros de otros sin sentir envidia o insatisfacción?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 0.9
  },
  {
    "id": "estabilidad_emocional_29",
    "texto": "¿Puedes mantener relaciones laborales constructivas con personas de carácter muy diferente al tuyo?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_30",
    "texto": "¿Cuando alguien te dice algo injusto, esperas antes de responder para que tu respuesta sea ecuánime?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.3
  },
  {
    "id": "estabilidad_emocional_31",
    "texto": "¿Usas técnicas de mindfulness, meditación u otras para regular tu estado emocional?",
    "nivel": "basica",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 0.8
  },
  {
    "id": "estabilidad_emocional_32",
    "texto": "¿Sabes cuándo necesitas descanso y lo priorizas antes de llegar al agotamiento?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.1
  },
  {
    "id": "estabilidad_emocional_33",
    "texto": "¿Puedes perdonar errores propios y ajenos sin guardar resentimiento que afecte el trabajo?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.2
  },
  {
    "id": "estabilidad_emocional_34",
    "texto": "¿Tu rendimiento se mantiene constante independientemente de tu estado de ánimo personal?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_35",
    "texto": "¿Tienes conciencia de qué situaciones te disparan emocionalmente y puedes anticiparlas?",
    "nivel": "avanzada",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.4
  },
  {
    "id": "estabilidad_emocional_36",
    "texto": "¿Puedes funcionar bien en entornos competitivos sin que la presión te paralice?",
    "nivel": "avanzada",
    "contexto": [
      "profesional",
      "estudiante"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  },
  {
    "id": "estabilidad_emocional_37",
    "texto": "¿Gestionas bien la frustración cuando un proyecto no avanza como esperabas?",
    "nivel": "intermedia",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.2
  },
  {
    "id": "estabilidad_emocional_38",
    "texto": "¿Distingues entre sentirte mal y estar en una crisis real, y actúas proporcionalmente?",
    "nivel": "avanzada",
    "contexto": [
      "general"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.4
  },
  {
    "id": "estabilidad_emocional_39",
    "texto": "¿Puedes ser empático con los problemas de otros sin absorber su carga emocional?",
    "nivel": "avanzada",
    "contexto": [
      "profesional"
    ],
    "competencia": "estabilidad_emocional",
    "peso": 1.5
  }
]
