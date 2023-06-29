const exercises = {
  "001": {
    id: "001",
    nombre: "Press de banca",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Acuéstate en un banco horizontal con los pies apoyados en el suelo. Agarra la barra con las manos separadas al ancho de los hombros y bájala hacia tu pecho. Luego empuja la barra hacia arriba hasta que los brazos estén extendidos. Repite el movimiento.",
  },
  "002": {
    id: "002",
    nombre: "Sentadillas",
    categoria: "pierna",
    musculo: "cuádriceps",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros. Baja lentamente el cuerpo como si fueras a sentarte en una silla, manteniendo la espalda recta. Luego, levántate empujando con los talones. Repite el movimiento.",
  },
  "003": {
    id: "003",
    nombre: "Dominadas",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Agarra una barra con las palmas de las manos mirando hacia adelante, separadas al ancho de los hombros. Sube el cuerpo tirando de los brazos hasta que la barbilla esté por encima de la barra. Baja lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "004": {
    id: "004",
    nombre: "Press militar",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros y sostén una barra en la parte frontal de los hombros. Empuja la barra hacia arriba hasta que los brazos estén extendidos sobre la cabeza. Baja la barra lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "005": {
    id: "005",
    nombre: "Plancha",
    categoria: "core",
    musculo: "abdominales",
    imagen: "",
    descripcion:
      "Apoya los antebrazos y las puntas de los pies en el suelo, manteniendo el cuerpo recto. Mantén la posición durante un período de tiempo determinado, contrayendo los músculos abdominales. Descansa y repite el ejercicio.",
  },
  "006": {
    id: "006",
    nombre: "Peso muerto",
    categoria: "espalda",
    musculo: "isquiotibiales",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, agarrando una barra frente a ti. Flexiona las rodillas y baja el cuerpo hacia el suelo manteniendo la espalda recta. Luego, levántate empujando con los talones y estirando las piernas. Repite el movimiento.",
  },
  "007": {
    id: "007",
    nombre: "Flexiones de brazos",
    categoria: "pecho",
    musculo: "tríceps",
    imagen: "",
    descripcion:
      "Apoya las manos en el suelo al ancho de los hombros y los pies juntos o separados. Baja el cuerpo flexionando los brazos hasta que el pecho casi toque el suelo. Luego, empuja el cuerpo hacia arriba hasta la posición inicial. Repite el movimiento.",
  },
  "008": {
    id: "008",
    nombre: "Zancadas",
    categoria: "pierna",
    musculo: "glúteos",
    imagen: "",
    descripcion:
      "Da un paso hacia adelante con una pierna y flexiona ambas rodillas hasta que la pierna de atrás casi toque el suelo. Luego, empuja con el talón de la pierna delantera y regresa a la posición inicial. Alterna las piernas y repite el movimiento.",
  },
  "009": {
    id: "009",
    nombre: "Remo con barra",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Inclínate hacia adelante manteniendo la espalda recta, agarrando una barra con las palmas hacia abajo. Jala la barra hacia tu cuerpo hasta que toque el abdomen. Luego, baja la barra lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "010": {
    id: "010",
    nombre: "Elevaciones laterales",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo mancuernas a los lados. Levanta los brazos hacia los lados hasta que estén paralelos al suelo. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "011": {
    id: "011",
    nombre: "Crunch abdominal",
    categoria: "core",
    musculo: "abdominales",
    imagen: "",
    descripcion:
      "Acuéstate en el suelo con las rodillas flexionadas y los pies apoyados. Coloca las manos detrás de la cabeza y levanta los hombros del suelo contrayendo los músculos abdominales. Baja lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "012": {
    id: "012",
    nombre: "Curl de bíceps",
    categoria: "brazo",
    musculo: "bíceps",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo mancuernas con los brazos extendidos a los lados. Flexiona los codos y levanta las mancuernas hacia los hombros. Luego, baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "013": {
    id: "013",
    nombre: "Extensiones de tríceps",
    categoria: "brazo",
    musculo: "tríceps",
    imagen: "",
    descripcion:
      "Sostén una mancuerna con las dos manos detrás de la cabeza, con los codos flexionados. Estira los brazos hacia arriba manteniendo los codos cerca de las orejas. Luego, flexiona los codos y baja la mancuerna lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "014": {
    id: "014",
    nombre: "Prensa de piernas",
    categoria: "pierna",
    musculo: "cuádriceps",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de prensa de piernas con los pies en la plataforma. Empuja la plataforma hacia arriba extendiendo las piernas. Luego, baja la plataforma lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "015": {
    id: "015",
    nombre: "Peso muerto rumano",
    categoria: "espalda",
    musculo: "isquiotibiales",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una barra frente a ti. Flexiona las caderas hacia atrás manteniendo las piernas ligeramente flexionadas y la espalda recta. Luego, endereza las caderas y estira las piernas. Repite el movimiento.",
  },
  "016": {
    id: "016",
    nombre: "Elevaciones frontales",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo mancuernas con los brazos extendidos al frente. Levanta las mancuernas hacia adelante hasta que estén paralelas al suelo. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "017": {
    id: "017",
    nombre: "Planck lateral",
    categoria: "core",
    musculo: "oblicuos",
    imagen: "",
    descripcion:
      "Apóyate sobre un antebrazo y los lados de los pies, formando una línea recta con el cuerpo. Mantén la posición durante un período de tiempo determinado, contrayendo los músculos del costado. Cambia de lado y repite el ejercicio.",
  },
  "018": {
    id: "018",
    nombre: "Curl de martillo",
    categoria: "brazo",
    musculo: "bíceps",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo mancuernas con los brazos extendidos a los lados y las palmas mirando hacia dentro. Flexiona los codos y levanta las mancuernas hacia los hombros. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "019": {
    id: "019",
    nombre: "Fondos en paralelas",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Agárrate a las barras paralelas con los brazos extendidos y las piernas cruzadas. Baja el cuerpo flexionando los codos hasta que los hombros estén al nivel de las barras. Luego, empuja el cuerpo hacia arriba hasta la posición inicial. Repite el movimiento.",
  },
  "020": {
    id: "020",
    nombre: "Peso muerto con mancuernas",
    categoria: "espalda",
    musculo: "isquiotibiales",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo mancuernas a los lados. Flexiona las rodillas y baja el cuerpo hacia el suelo manteniendo la espalda recta. Luego, levántate empujando con los talones y estirando las piernas. Repite el movimiento.",
  },
  "021": {
    id: "021",
    nombre: "Press de hombros con barra",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Siéntate en un banco con respaldo vertical, sosteniendo una barra a la altura de los hombros. Empuja la barra hacia arriba hasta que los brazos estén extendidos sobre la cabeza. Baja la barra lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "022": {
    id: "022",
    nombre: "Plancha con elevación de piernas",
    categoria: "core",
    musculo: "abdominales",
    imagen: "",
    descripcion:
      "Apóyate en los antebrazos y las puntas de los pies en el suelo, formando una línea recta con el cuerpo. Levanta una pierna hacia arriba lo más alto que puedas sin doblar la cadera. Baja la pierna y repite con la otra pierna. Alterna las piernas y repite el ejercicio.",
  },
  "023": {
    id: "023",
    nombre: "Curl de concentración",
    categoria: "brazo",
    musculo: "bíceps",
    imagen: "",
    descripcion:
      "Siéntate en un banco con las piernas separadas, sosteniendo una mancuerna con el brazo extendido entre las piernas. Flexiona el codo y levanta la mancuerna hacia el hombro sin mover el resto del brazo. Baja la mancuerna lentamente hasta la posición inicial. Repite el movimiento y luego cambia de brazo.",
  },
  "024": {
    id: "024",
    nombre: "Patada de tríceps",
    categoria: "brazo",
    musculo: "tríceps",
    imagen: "",
    descripcion:
      "Arrodíllate en el suelo con las manos apoyadas y la espalda recta. Extiende una pierna hacia atrás y flexiona el codo, llevando el talón hacia el glúteo. Luego, estira la pierna hacia atrás y endereza el brazo. Repite el movimiento y luego cambia de pierna.",
  },
  "025": {
    id: "025",
    nombre: "Peso muerto sumo",
    categoria: "espalda",
    musculo: "isquiotibiales",
    imagen: "",
    descripcion:
      "Párate con los pies separados más allá del ancho de los hombros, sosteniendo una barra frente a ti. Flexiona las caderas hacia atrás manteniendo las piernas ligeramente flexionadas y la espalda recta. Luego, endereza las caderas y estira las piernas. Repite el movimiento.",
  },
  "026": {
    id: "026",
    nombre: "Elevaciones posteriores",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo mancuernas con los brazos extendidos hacia abajo. Levanta los brazos hacia atrás hasta que estén paralelos al suelo. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "027": {
    id: "027",
    nombre: "Rotaciones de torso",
    categoria: "core",
    musculo: "oblicuos",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una mancuerna con las dos manos al frente del cuerpo. Gira el torso hacia un lado manteniendo las caderas estables, luego gira hacia el otro lado. Repite el movimiento alternando los lados.",
  },
  "028": {
    id: "028",
    nombre: "Flexiones diamante",
    categoria: "pecho",
    musculo: "tríceps",
    imagen: "",
    descripcion:
      "Apoya las manos en el suelo formando un triángulo con los dedos índices y pulgares juntos. Baja el cuerpo flexionando los codos hasta que el pecho casi toque el suelo. Luego, empuja el cuerpo hacia arriba hasta la posición inicial. Repite el movimiento.",
  },
  "029": {
    id: "029",
    nombre: "Sentadillas con salto",
    categoria: "pierna",
    musculo: "cuádriceps",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros. Flexiona las rodillas y baja el cuerpo hacia el suelo como si fueras a realizar una sentadilla. Luego, salta explosivamente hacia arriba estirando las piernas. Aterriza suavemente y repite el movimiento.",
  },
  "030": {
    id: "030",
    nombre: "Pullover con mancuerna",
    categoria: "espalda",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Acuéstate en un banco con la cabeza y los hombros apoyados, sosteniendo una mancuerna con ambas manos sobre el pecho. Baja la mancuerna detrás de la cabeza manteniendo los brazos extendidos. Luego, lleva la mancuerna de vuelta a la posición inicial. Repite el movimiento.",
  },
  "031": {
    id: "031",
    nombre: "Press Arnold",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Siéntate en un banco con respaldo vertical, sosteniendo un par de mancuernas a la altura de los hombros con las palmas mirando hacia ti. Presiona las mancuernas hacia arriba girando las palmas hacia afuera a medida que subes. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "032": {
    id: "032",
    nombre: "Plancha con rodilla al codo",
    categoria: "core",
    musculo: "abdominales",
    imagen: "",
    descripcion:
      "Apóyate en los antebrazos y las puntas de los pies en el suelo, formando una línea recta con el cuerpo. Lleva una rodilla hacia el codo del mismo lado contrayendo los abdominales. Vuelve a extender la pierna y repite con la otra rodilla. Alterna las rodillas y repite el ejercicio.",
  },
  "033": {
    id: "033",
    nombre: "Curl de bíceps con barra",
    categoria: "brazo",
    musculo: "bíceps",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una barra con los brazos extendidos y las palmas mirando hacia adelante. Flexiona los codos y levanta la barra hacia los hombros. Baja la barra lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "034": {
    id: "034",
    nombre: "Dips en paralelas",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Agárrate a las barras paralelas con los brazos extendidos y las piernas cruzadas. Baja el cuerpo flexionando los codos hasta que los hombros estén al nivel de las barras. Luego, empuja el cuerpo hacia arriba hasta la posición inicial. Repite el movimiento.",
  },
  "035": {
    id: "035",
    nombre: "Sentadillas con barra",
    categoria: "pierna",
    musculo: "cuádriceps",
    imagen: "",
    descripcion:
      "Coloca una barra sobre los hombros, detrás del cuello, sosteniéndola con las manos. Flexiona las rodillas y baja el cuerpo hacia el suelo manteniendo la espalda recta. Luego, levántate empujando con los talones y estirando las piernas. Repite el movimiento.",
  },
  "036": {
    id: "036",
    nombre: "Remo con mancuerna",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una mancuerna en una mano. Flexiona las caderas hacia adelante manteniendo la espalda recta, luego levanta la mancuerna hacia el pecho manteniendo el codo cerca del cuerpo. Baja la mancuerna lentamente hasta la posición inicial. Repite el movimiento y luego cambia de brazo.",
  },
  "037": {
    id: "037",
    nombre: "Elevaciones laterales",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo mancuernas con los brazos extendidos hacia los lados. Levanta los brazos hacia los lados hasta que estén paralelos al suelo. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "038": {
    id: "038",
    nombre: "Flexiones de brazos en anillas",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Agárrate a las anillas con los brazos extendidos y las piernas cruzadas. Baja el cuerpo flexionando los codos hasta que el pecho casi toque las anillas. Luego, empuja el cuerpo hacia arriba hasta la posición inicial. Repite el movimiento.",
  },
  "039": {
    id: "039",
    nombre: "Zancadas con mancuernas",
    categoria: "pierna",
    musculo: "cuádriceps",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una mancuerna en cada mano. Da un paso hacia adelante con una pierna y flexiona ambas rodillas hasta que la rodilla trasera casi toque el suelo. Luego, empuja con el talón delantero y vuelve a la posición inicial. Repite el movimiento con la otra pierna.",
  },
  "040": {
    id: "040",
    nombre: "Encogimientos de hombros",
    categoria: "hombro",
    musculo: "trapecios",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una mancuerna en cada mano con los brazos extendidos. Eleva los hombros hacia las orejas en un movimiento de encogimiento. Baja los hombros lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "041": {
    id: "041",
    nombre: "Fondos en barras paralelas",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Agárrate a las barras paralelas con los brazos extendidos y las piernas cruzadas. Baja el cuerpo flexionando los codos hasta que los hombros estén al nivel de las barras. Luego, empuja el cuerpo hacia arriba hasta la posición inicial. Repite el movimiento.",
  },
  "042": {
    id: "042",
    nombre: "Peso muerto rumano",
    categoria: "espalda",
    musculo: "isquiotibiales",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una barra frente a ti. Flexiona ligeramente las rodillas y baja el cuerpo hacia adelante manteniendo la espalda recta. Luego, levanta el cuerpo estirando las piernas y la espalda. Repite el movimiento.",
  },
  "043": {
    id: "043",
    nombre: "Press militar",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Siéntate en un banco con respaldo vertical, sosteniendo una barra sobre los hombros a la altura de la clavícula. Presiona la barra hacia arriba estirando los brazos. Baja la barra lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "044": {
    id: "044",
    nombre: "Plancha lateral",
    categoria: "core",
    musculo: "oblicuos",
    imagen: "",
    descripcion:
      "Acuéstate de costado con el antebrazo apoyado en el suelo y el cuerpo en línea recta. Levanta las caderas del suelo formando una línea recta desde los hombros hasta los pies. Mantén la posición durante unos segundos y luego cambia de lado. Repite el ejercicio alternando los lados.",
  },
  "045": {
    id: "045",
    nombre: "Curl de martillo",
    categoria: "brazo",
    musculo: "bíceps",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una mancuerna en cada mano con las palmas mirando hacia los lados. Flexiona los codos y levanta las mancuernas hacia los hombros manteniendo las palmas mirando hacia los lados. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "046": {
    id: "046",
    nombre: "Peso muerto",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Párate con los pies separados al ancho de los hombros, sosteniendo una barra frente a ti con las manos separadas al ancho de los hombros. Flexiona las caderas hacia atrás manteniendo las piernas ligeramente flexionadas y la espalda recta. Luego, endereza las caderas y estira las piernas. Repite el movimiento.",
  },
  "047": {
    id: "047",
    nombre: "Press de hombros con mancuernas",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Siéntate en un banco con respaldo vertical, sosteniendo una mancuerna en cada mano a la altura de los hombros con las palmas mirando hacia adelante. Presiona las mancuernas hacia arriba estirando los brazos. Baja las mancuernas lentamente hasta la posición inicial. Repite el movimiento.",
  },
  "048": {
    id: "048",
    nombre: "Plancha con elevación de pierna",
    categoria: "core",
    musculo: "abdominales",
    imagen: "",
    descripcion:
      "Apóyate en los antebrazos y las puntas de los pies en el suelo, formando una línea recta con el cuerpo. Levanta una pierna hacia arriba manteniendo el cuerpo estable y la espalda recta. Baja la pierna y repite con la otra pierna. Alterna las piernas y repite el ejercicio.",
  },
  "049": {
    id: "049",
    nombre: "Flexiones de brazos en anillas",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Agárrate a las anillas con los brazos extendidos y las piernas cruzadas. Baja el cuerpo flexionando los codos hasta que el pecho casi toque las anillas. Luego, empuja el cuerpo hacia arriba hasta la posición inicial. Repite el movimiento.",
  },
  "050": {
    id: "050",
    nombre: "Sentadillas búlgaras",
    categoria: "pierna",
    musculo: "cuádriceps",
    imagen: "",
    descripcion:
      "Colócate de espaldas a un banco, apoya la parte superior del pie en el banco y da un paso hacia adelante con la otra pierna. Flexiona las rodillas y baja el cuerpo hacia el suelo manteniendo la espalda recta. Luego, levántate empujando con el talón delantero y vuelve a la posición inicial. Repite el movimiento con la otra pierna.",
  },
  "051": {
    id: "051",
    nombre: "Pec Fly en máquina",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de pec fly con el pecho apoyado en el respaldo y los brazos flexionados a los lados. Empuja los brazos hacia adelante juntando las manijas y contrayendo los músculos del pecho. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "052": {
    id: "052",
    nombre: "Jalón prono en máquina",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de jalón con el pecho apoyado en el respaldo y agarra la barra con las palmas mirando hacia abajo. Tira de la barra hacia abajo hasta que esté cerca del pecho, contrayendo los músculos de la espalda. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "053": {
    id: "053",
    nombre: "Jalón neutro en máquina",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de jalón con el pecho apoyado en el respaldo y agarra la barra con las palmas mirando hacia dentro. Tira de la barra hacia abajo hasta que esté cerca del pecho, contrayendo los músculos de la espalda. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "054": {
    id: "054",
    nombre: "Jalón supino en máquina",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de jalón con el pecho apoyado en el respaldo y agarra la barra con las palmas mirando hacia arriba. Tira de la barra hacia abajo hasta que esté cerca del pecho, contrayendo los músculos de la espalda. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "055": {
    id: "055",
    nombre: "Remo en máquina",
    categoria: "espalda",
    musculo: "dorsales",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de remo con los pies apoyados en los reposapiés y agarra las manijas. Tira de las manijas hacia ti, contrayendo los músculos de la espalda. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "056": {
    id: "056",
    nombre: "Deltoides posterior en máquina",
    categoria: "hombro",
    musculo: "deltoides",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de deltoides posterior con el pecho apoyado en el respaldo y los brazos extendidos hacia adelante. Tira de los brazos hacia atrás, contrayendo los músculos del deltoides posterior. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "057": {
    id: "057",
    nombre: "Cruces en máquina",
    categoria: "pecho",
    musculo: "pectorales",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de cruces con los brazos extendidos a los lados y las palmas mirando hacia adelante. Cruza los brazos frente al pecho, contrayendo los músculos del pecho. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "058": {
    id: "058",
    nombre: "Adductores en máquina",
    categoria: "pierna",
    musculo: "adductores",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de adductores con los muslos apoyados en los cojines y las piernas separadas. Presiona los cojines juntando las piernas, contrayendo los músculos de los adductores. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "059": {
    id: "059",
    nombre: "Abductores en máquina",
    categoria: "pierna",
    musculo: "abductores",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de abductores con los muslos apoyados en los cojines y las piernas juntas. Presiona los cojines separando las piernas hacia los lados, contrayendo los músculos de los abductores. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "060": {
    id: "060",
    nombre: "Hip Thrust en máquina",
    categoria: "glúteos",
    musculo: "glúteos",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de hip thrust con la espalda apoyada en el respaldo y los pies apoyados en la plataforma. Empuja la plataforma hacia arriba levantando las caderas, contrayendo los músculos de los glúteos. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "061": {
    id: "061",
    nombre: "Cuádriceps en máquina",
    categoria: "pierna",
    musculo: "cuádriceps",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de cuádriceps con las rodillas apoyadas en los cojines y los pies en la plataforma. Extiende las piernas levantando la plataforma, contrayendo los músculos de los cuádriceps. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
  "062": {
    id: "062",
    nombre: "Femoral sentado en máquina",
    categoria: "pierna",
    musculo: "femorales",
    imagen: "",
    descripcion:
      "Siéntate en una máquina de femoral con las rodillas apoyadas en los cojines y los pies en la plataforma. Flexiona las piernas bajando la plataforma, contrayendo los músculos de los femorales. Luego, vuelve a la posición inicial de manera controlada. Repite el movimiento.",
  },
};

export class ExercisesList {
    constructor(listContainer) {
        this.listContainer = listContainer;
        this.exercises = exercises;
        this.exercisesIds = Object.keys(this.exercises);
        this.selectedCategories = ["pecho"];
    }

    _getExerciseUI = (exercise) => {
        const exUI = document.createElement("li");
        exUI.classList.add("exercise-list__item");
        exUI.innerHTML = `
            <div class="exercise-list__item__image">
                <img src="${exercise.imagen}" alt="${exercise.nombre}">
            </div>
            <div class="exercise-list__item__info">
                <h3 class="exercise-list__item__info__title">${exercise.nombre}</h3>
                <p class="exercise-list__item__info__description">${exercise.descripcion}</p>
                <p class="exercise-list__item__info__category">${exercise.categoria}</p>
            </div>
            <input type="checkbox" class="exercise-list__selected-input" data-id="${exercise.id}">
        `;
        return exUI;
    }

    _checkSelectedCategory = (id) => {
        if (this.selectedCategories.length === 0) {
            return true;
        }

        const exercise = this.getExercise(id);
        return this.selectedCategories.includes(exercise.categoria);
    }

    render = () => {
        this.listContainer.innerHTML = "";
        this.exercisesIds.forEach(id => {
            if (!this._checkSelectedCategory(id)){
                return;
            }
            const exercise = this.getExercise(id);
            const exerciseCard = this._getExerciseUI(exercise);
            this.listContainer.appendChild(exerciseCard);
        })
    }
    
    getExercises = () => {
        return this.exercises;
    }

    getSelectedExercises = () => {
        const selectedInputs = document.querySelectorAll(".exercise-list__selected-input:checked");
        const selectedExercises = [];
        selectedInputs.forEach(input => {
            const id = input.dataset.id;
            const exercise = this.getExercise(id);
            selectedExercises.push(exercise);
        })
        return selectedExercises;
    }
    
    getExercise = (id) => {
        return this.exercises[id];
    }

    
}