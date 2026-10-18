---
title: "¿Qué modelo es mejor? Mala pregunta. ¿Qué modelo sirve para esta tarea?"
description: "Los artículos que comparan el modelo A con el B se saltan la decisión real. Cómo elegir modelo según riesgo, volumen y datos, y qué aporta un modelo local en costo y privacidad."
pubDate: 2026-10-18
category: "IA y Productividad"
lang: "es"
translationKey: "choosing-the-right-model"
---

Cada pocas semanas aparece un artículo que anuncia que el modelo A le gana al B. Los leo, y después noto en qué no me ayudan: en decidir cómo resolver la tarea que tengo en el escritorio.

La comparación responde una pregunta sobre los modelos en general. Tu pregunta es sobre una tarea, un conjunto de documentos y una persona que tiene que responder por el resultado. No son la misma pregunta, y en la distancia entre ambas se pierden dinero, tiempo y privacidad.

**La versión corta:** elige el modelo por tarea, no por equipo ni por año. Tres cosas lo deciden: qué pasa si la respuesta es incorrecta, con qué frecuencia se repite la tarea y qué datos toca.

## Por qué el ranking no se traslada

Un ranking promedia un modelo sobre muchas tareas, y ninguna es la tuya. Un modelo que gana en promedio puede perder con tus facturas, tus notas de reunión o tu correspondencia en español, y uno más barato puede igualarlo ahí.

Los propios proveedores lo dicen. La guía de Anthropic para elegir modelo recomienda crear pruebas específicas para tu caso de uso, probar con tus prompts y datos reales, y llama a un buen conjunto de evaluación el paso más importante. La guía de selección de modelos de OpenAI da el mismo consejo con otras palabras: empieza con una opción potente y quédate con el ajuste más ligero que cumpla tu estándar de calidad. Ninguna dice que elijas lo que encabeza una gráfica.

Esas guías también muestran que "el modelo" no es una sola decisión. Dentro de un mismo proveedor hay niveles y ajustes que cambian velocidad y costo por profundidad. Así que la decisión real es más pequeña y más útil: para esta tarea, ¿cuánta capacidad necesito y cuánto estoy pagando por el resto?

## Tres preguntas por tarea

Toma una semana normal de un asistente o de un project manager y lista las tareas. Para cada una, pregunta:

1. **¿Cuánto cuesta una respuesta equivocada?** Un correo mal etiquetado cuesta un minuto. Una cláusula mal leída en un cambio de contrato puede costar un presupuesto.
2. **¿Con qué frecuencia se ejecuta?** Una tarea que se hace dos veces al mes puede usar el modelo más fuerte sin que nadie note la factura. Una que se hace miles de veces, no.
3. **¿Qué datos toca?** Un texto público es una cosa. Nombres, datos de cuentas y documentos internos son otra.

Así se ordena en la práctica. Clasificar una bandeja de entrada compartida es de bajo riesgo, alto volumen y a menudo está llena de datos personales: normalmente basta un modelo pequeño, quizá uno que corra en tu propio equipo, con una persona que revise por muestreo. Redactar una actualización para stakeholders a partir de notas de reunión es de riesgo medio y bajo volumen, así que un modelo más fuerte está bien siempre que alguien lea el borrador antes de que salga. Revisar un cambio de contrato es de alto riesgo: el modelo más fuerte que puedas usar es un segundo par de ojos, nunca la decisión.

## De dónde sale el ahorro

El costo sigue al volumen, y el volumen es sobre todo trabajo fácil. FrugalGPT, un estudio de 2023, probó cascadas en las que un modelo barato responde primero y solo las preguntas difíciles suben a uno más fuerte. Los autores reportan igualar los resultados del mejor modelo individual con reducciones de costo de hasta 98% en sus pruebas. Un artículo de 2024, RouteLLM, entrenó enrutadores que eligen entre un modelo fuerte y uno débil en cada solicitud, y reporta recortes de costo de más de 2x en algunos casos sin pérdida de calidad. Son entornos de investigación, y tu mezcla de tareas no se comportará igual.

También hay que tomar la lección con cuidado. Las pruebas propias de Anthropic sobre combinar modelos encontraron que valía la pena en algunas configuraciones y que costaba precisión o dinero en otras, y le piden al lector que mida con su propia carga de trabajo. Enrutar no es gratis: alguien tiene que decidir qué cuenta como fácil, y comprobar que el camino barato se sostiene.

Un artículo de postura de 2025, de un grupo de NVIDIA, sostiene que los modelos de lenguaje pequeños bastan para muchos de los pasos estrechos y repetidos dentro de flujos automatizados, y que los sistemas mixtos tienen sentido cuando hace falta conversación general. Es un argumento, abierto a la crítica, pero apunta en la misma dirección.

## Qué te da un modelo local

Correr un modelo en tu propio computador cambia dos cosas. No hay tarifa por token, así que una tarea de alto volumen cuesta electricidad y hardware en lugar de un contador. Y el texto puede quedarse en tu equipo: la documentación de Ollama dice que el uso local se queda en tu computador y que Ollama no ve tus prompts. La autoridad británica de protección de datos, la ICO, incluye la inferencia en el propio dispositivo entre las formas de limitar cuántos datos personales salen de tus manos, junto con el principio más amplio de usar solo los datos que un propósito necesita.

El lado del costo tiene límites. El modelo tiene que caber en la memoria de tu tarjeta gráfica o correrá lento en el procesador, así que lo que puedes ejecutar depende de tu hardware, y los modelos pequeños son más débiles en razonamiento difícil. "Sin tarifa por token" tampoco es "gratis": lo pagas en tiempo de instalación y en tu propia atención.

## Lo que un modelo local no garantiza

Tendría cuidado con la frase "local significa privado". Significa que el modelo no envía tu texto a quien lo fabricó, y nada más.

El servidor de Ollama escucha por defecto solo en la máquina local, pero la documentación también explica cómo abrirlo a la red. En el momento en que lo haces, el control de acceso pasa a ser tu trabajo. La lista de OWASP con los diez mayores riesgos de las aplicaciones con LLM incluye la divulgación de información sensible y la cadena de suministro, y ambas aplican a un modelo que descargas y ejecutas tú mismo: los pesos y las herramientas vienen de algún lado, y lo que el modelo puede leer, lo puede repetir. Local también traslada a ti el trabajo de actualizar y asegurar la instalación.

Así que la pregunta de privacidad tiene dos mitades. ¿Adónde va el texto, y quién puede llegar a la máquina y a los resultados? El Marco de Gestión de Riesgos de IA del NIST, y su perfil para IA generativa publicado en 2024, tratan esto como un asunto de gobernar y mapear el riesgo de cada uso, no de elegir una herramienta una sola vez.

## Qué haría yo con tu semana

Si me pidieras mirar cómo tu equipo usa la IA, no empezaría eligiendo un modelo. Listaría las tareas y las ordenaría con las tres preguntas. El trabajo de alto volumen con datos personales va primero en la lista para un modelo pequeño o local con revisión por muestreo. El trabajo de bajo volumen y alto riesgo recibe el modelo más fuerte y una persona con nombre que responde por el resultado. En el medio, probaría dos opciones con una muestra de documentos reales y me quedaría con la más barata si el resultado se sostiene.

Es el mismo hábito que describí en [¿Va a reemplazar la IA a tu asistente virtual o a tu PM?](/es/blog/reemplazara-la-ia-a-tu-asistente-virtual-o-pm): la herramienta hace la primera pasada y una persona responde por la versión final. La elección del modelo solo decide qué herramienta hace esa primera pasada. Para el lado del project manager, está [Cómo la IA está cambiando el rol del Project Manager](/es/blog/ia-y-el-rol-del-project-manager). Si quieres recorrer tu propia lista, [escríbeme](/es/contact).

## Qué leí

Guías de proveedores e investigación, cada una enlazada abajo. No usé rankings de benchmarks.

- Anthropic, [Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model) y [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- OpenAI, [Model selection](https://developers.openai.com/api/docs/guides/model-selection)
- Chen, Zaharia y Zou, [FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance](https://arxiv.org/abs/2305.05176) (2023)
- Ong y colegas, [RouteLLM: Learning to Route LLMs with Preference Data](https://arxiv.org/abs/2406.18665) (2024)
- Belcak y colegas, [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (2025)
- Ollama, [FAQ](https://docs.ollama.com/faq)
- Information Commissioner's Office del Reino Unido, [How should we assess security and data minimisation in AI?](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-should-we-assess-security-and-data-minimisation-in-ai/)
- OWASP, [Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- NIST, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

Las cifras salen de los resúmenes de los artículos; no repetí ninguno de los estudios. No pude abrir como texto el perfil de IA generativa del NIST, así que cito solo la página del marco y sus fechas.
