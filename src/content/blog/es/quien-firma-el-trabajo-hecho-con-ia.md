---
title: "¿Quién firma el trabajo hecho con IA? Una regla de revisión que escala con el riesgo"
description: "La IA puede redactar, clasificar y resumir, pero una persona tiene que responder por el resultado. Cómo decidir cuánta revisión necesita cada tarea y qué debe registrar una aprobación."
pubDate: 2026-10-20
category: "Operaciones"
lang: "es"
translationKey: "ai-work-sign-off"
---

En mi entrada anterior cerré con una frase: el trabajo de bajo volumen y alto riesgo recibe el modelo más fuerte y una persona con nombre que responde por el resultado. Un lector podría preguntar, con razón, qué significa "responder" en la práctica. No es leer cada resultado línea por línea, porque nadie sostiene eso. Tampoco es firmar sin leer.

Esta entrada es mi respuesta: una regla de revisión que se vuelve más ligera o más estricta según lo que cuesta un error.

**La versión corta:** la IA hace la primera pasada, una persona con nombre responde por la última, y la cantidad de revisión depende del riesgo de la tarea, no de qué tan bien se ve el borrador.

## Por qué "alguien lo va a revisar" no es un plan

La investigación sobre automatización es anterior a la IA generativa, y no es halagadora. La revisión de Parasuraman y Manzey de 2010 en *Human Factors* describe el sesgo de automatización y la complacencia: las personas vigilan la salida automática menos de lo que deberían, y la siguen incluso cuando está equivocada. Según el resumen, les pasa a novatos y a expertos, y la capacitación o las instrucciones por sí solas no lo evitan. Empeora cuando la persona tiene otras tareas que compiten por su atención, que describe casi cualquier jornada de trabajo.

El Reglamento de IA de la Unión Europea nombra el mismo problema. Para los sistemas de alto riesgo, el artículo 14 exige que quienes supervisan puedan ser conscientes de la tendencia a confiar en exceso en la salida del sistema, y que puedan decidir no usarlo, o descartar o revertir su resultado. La mayor parte de lo que hace un equipo pequeño con IA no es "alto riesgo" en el sentido legal, así que esto no es una afirmación de cumplimiento sobre tus facturas. Es una buena descripción de lo que necesita una revisión real: atención, derecho a decir que no y una forma de deshacer.

Entonces, "una persona lo mira" es un control débil. Uno mejor dice quién, con qué cuidado y qué deja registrado.

## Tres niveles de revisión

Ordeno las tareas por el costo de una respuesta incorrecta, la misma primera pregunta de la entrada sobre modelos. En la práctica salen tres niveles.

1. **Revisión por muestreo.** Costo bajo si falla, volumen alto. Clasificar solicitudes entrantes, etiquetar, primeros borradores de respuestas a preguntas rutinarias. Una persona lee una muestra, no todo, y la muestra se elige antes de ver los resultados.
2. **Revisión antes de que salga.** Costo medio. Correos a clientes, informes, resúmenes de reuniones, todo lo que lleve una cifra o una fecha. Una persona lo lee completo y verifica los hechos contra la fuente, no contra el borrador.
3. **Aprobación con nombre.** Costo alto: dinero, contratos, cumplimiento, cualquier cosa difícil de deshacer. La salida de la IA es un insumo. Una persona con nombre y con autoridad para decidir lee la fuente, toma la decisión y la registra.

El nivel va ligado al tipo de tarea y se decide de antemano, no lo elige el día de hoy quien tenga prisa.

## Lo que traje del trabajo regulado

Dos partes de mi trayectoria moldearon esto. En una fintech con más de dos millones de usuarios trabajé colas de casos con un estándar de respuesta de 24 horas. La lección útil fue que una cola no tiene un solo nivel de riesgo. La mayoría de los casos son rutinarios, unos pocos no, y el sistema funciona cuando los rutinarios avanzan rápido con plantillas y los riesgosos suben por una ruta de escalamiento hasta alguien con autoridad para decidir. La IA encaja en la parte rutinaria. No reemplaza el escalamiento.

En el gobierno distrital de Bogotá (UAERMV) diseñé marcos de retención documental, y ahí el punto era la trazabilidad: un auditor debe poder ver qué se conservó, por qué y quién lo aprobó. Escribí sobre ambos en [automatizar workflows sin perder el control](/es/blog/automatizar-workflows-sin-perder-el-control). El mismo hábito aplica aquí. Si una decisión asistida por IA no se puede rastrear hasta una persona y una razón, no es un proceso controlado, por bueno que haya sido el resultado.

Aquí describo un método, no afirmo un resultado medido. No tengo cifras de antes y después para publicar, y prefiero decirlo a inventarlas.

## Qué debe registrar una aprobación

Una aprobación que no deja rastro es solo una sensación. Guarda cinco líneas, en la herramienta que tu equipo ya use:

1. **Qué produjo la IA**, y qué herramienta o modelo lo hizo.
2. **Qué revisó la persona**, y contra qué fuente.
3. **Qué cambió o rechazó.** Es la línea más útil con el tiempo, porque muestra dónde es débil la herramienta.
4. **Quién aprobó**, con nombre y cargo, y cuándo.
5. **El nivel de revisión** aplicado, para que quien lea después pueda ver si el nivel era el correcto.

Ninguna línea tiene que ser larga. Una frase por línea basta, y una plantilla lo hace rápido. Si la elección del modelo forma parte del registro, se conecta directamente con [qué modelo sirve para la tarea](/es/blog/que-modelo-sirve-para-la-tarea).

## Cómo lograr que la revisión sea real

Algunos hábitos evitan que la revisión se vuelva un sello de goma:

- **Verifica contra la fuente, no contra el borrador.** Un borrador fluido hace que los errores parezcan correctos.
- **Rota la muestra.** Si la misma persona revisa siempre el mismo tipo de resultado, la atención baja.
- **Dale permiso al revisor para rechazar.** Si rechazar significa reescribir todo contra el reloj, la gente deja de rechazar. La idea del artículo 14 de poder descartar la salida también aplica a un equipo de tres.
- **Registra los errores que pasaron.** Cuando un error se cuela, anota por qué nivel pasó y si el nivel estaba mal.
- **Revisa los niveles** cuando cambie la herramienta. Un modelo nuevo trae fallas nuevas.

## Una lista que puedes copiar

- ¿Cada tarea recurrente con IA tiene un nivel de revisión asignado?
- ¿Se eligió el nivel por el costo de una respuesta incorrecta, y no por cómo se lee el borrador?
- En los niveles 2 y 3, ¿la verificación se hace contra la fuente?
- ¿Hay una persona con nombre y con autoridad para el nivel 3?
- ¿Las cinco líneas de aprobación se guardan en un lugar que se pueda encontrar?
- ¿Puede el revisor rechazar sin que lo castiguen por la demora?
- ¿Cuándo revisaste por última vez si los niveles siguen siendo adecuados?

## La conclusión

La IA quita de tu escritorio el trabajo del primer borrador. No quita la responsabilidad. Decide de antemano con qué cuidado se revisa cada tipo de tarea, nombra quién responde por el resultado y guarda un registro corto. Esto es práctica operativa general, no asesoría legal: si tu trabajo cae bajo una regulación de sistemas de IA, lee la norma o consulta a alguien calificado.

Si quieres ayuda para montar esto en tu propio equipo, mira cómo abordo el [apoyo ejecutivo y los flujos de trabajo con IA](/es/virtual-assistant), o [escríbeme](/es/contact) con la lista de tareas con las que quieres empezar.

## Qué leí

- Parasuraman y Manzey, [Complacency and Bias in Human Use of Automation: An Attentional Integration](https://pmc.ncbi.nlm.nih.gov/articles/PMC3240751), *Human Factors* 52(3), 2010. Leí el resumen y síntesis, no cada estudio que revisa.
- Unión Europea, Reglamento (UE) 2024/1689 (Ley de IA), artículo 14 sobre supervisión humana, a través del [servicio de ayuda de la Comisión Europea sobre la Ley de IA](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14). Puntos 14(4)(b), (d) y (e).
- NIST, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework); la página indica que el Perfil de IA generativa (NIST AI 600-1) se publicó el 26 de julio de 2024. No leí el texto del perfil.
