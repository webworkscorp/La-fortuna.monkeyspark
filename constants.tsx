
import { Tour, GuideProfile } from './types';

export const GUIDE_PROFILE: GuideProfile = {
  name: "José (Pepe)",
  role: "Guía naturalista local",
  description: "Guía con amplio conocimiento de la biodiversidad del área del Volcán Arenal, especializado en tours durante temporada lluviosa y observación de vida silvestre."
};

export const TOURS: Tour[] = [
  {
    id: "1",
    name: "Bosque Nuboso y Cascadas Escondidas",
    description: "Visita al único bosque nuboso de la región y exploración de cada cascada exótica y poco conocida.",
    schedule: "7:00 a.m. a 3:00 p.m.",
    rates: "$23 a $12 según número de personas",
    includes: "Snack típico",
    imageUrl: "https://i.imgur.com/g3n9EtJ.jpeg"
  },
  {
    id: "2",
    name: "Caminata Nocturna Económica – Arenal",
    description: "Caminata nocturna en áreas abiertas de bosque alrededor del Volcán Arenal.",
    note: "Máximo 5 personas. Opción con o sin termales.",
    imageUrl: "https://i.imgur.com/y6P9lQ6.jpeg"
  },
  {
    id: "3",
    name: "Puentes Colgantes y Senderos de Lava",
    description: "Puentes colgantes, torres, cascadas, miradores y senderos volcánicos.",
    schedule: "8:00 a.m. o 10:00 a.m.",
    imageUrl: "https://i.imgur.com/vKbTl3p.jpeg"
  },
  {
    id: "4",
    name: "Caminata Nocturna en Bosque Lluvioso de La Fortuna",
    description: "El mejor tour para observar ranas y vida silvestre, especialmente cuando llueve.",
    includes: "Entrada, guía naturalista bilingüe y cena opcional",
    imageUrl: "https://i.imgur.com/WZsWa7A.jpeg"
  },
  {
    id: "5",
    name: "Volcán Arenal + Caminata Nocturna + Aguas Termales",
    description: "Senderos volcánicos, observación nocturna de fauna y visita a aguas termales.",
    imageUrl: "https://i.imgur.com/Kh9pRKh.jpeg"
  },
  {
    id: "6",
    name: "Volcán Arenal Nocturno en Eco Termales",
    description: "Caminata nocturna en resort de aguas termales cerca de la base del volcán.",
    imageUrl: "https://i.imgur.com/hGyNTZY.jpeg"
  },
  {
    id: "7",
    name: "Río Celeste + Cataratas Azules + Cultura Maleku",
    description: "Tour combinado al Río Celeste, Blue Falls y artesanía indígena Maleku.",
    imageUrl: "https://i.imgur.com/ocMot6E.jpeg"
  }
];
