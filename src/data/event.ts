export type EventDay = {
  tag: string;
  day: string;
  month: string;
  time: string;
  short: string;
  place: string;
  room: string;
  addr: string;
  tip: string;
  map: string;
  embed: string;
  flyer: string;
  /** ISO de início, usado no JSON-LD */
  start: string;
  end: string;
};

export const days: EventDay[] = [
  {
    tag: "1ª noite",
    day: "05",
    month: "outubro · segunda",
    time: "18h30–21h",
    short: "05/10",
    place: "Extensão CEU Quinta do Sol",
    room: "Etec Prof. Aprígio Gonzaga · Sala do Curso EAD",
    addr: "Rua Otto Cordes — Parque Cisper, São Paulo/SP · CEP 03819-160",
    tip: "Espaço cedido pela coordenação da Extensão CEU Quinta do Sol.",
    map: "https://www.google.com/maps/search/?api=1&query=CEU+Quinta+do+Sol+Rua+Otto+Cordes+S%C3%A3o+Paulo",
    embed:
      "https://maps.google.com/maps?q=CEU%20Quinta%20do%20Sol%2C%20Rua%20Otto%20Cordes%2C%20S%C3%A3o%20Paulo&z=15&output=embed",
    flyer: "/convites/convite-05-10.jpeg",
    start: "2026-10-05T18:30:00-03:00",
    end: "2026-10-05T21:00:00-03:00",
  },
  {
    tag: "2ª noite",
    day: "08",
    month: "outubro · quinta",
    time: "18h30–21h",
    short: "08/10",
    place: "Etec Itaquera II",
    room: "Auditório",
    addr: "Av. Miguel Ignácio Curi, s/nº — Vila Carmosina, São Paulo/SP · CEP 08595-005",
    tip: "Perto do Metrô Itaquera (Linha 3-Vermelha). Estacionamento com vagas limitadas.",
    map: "https://www.google.com/maps/search/?api=1&query=Etec+Itaquera+II",
    embed:
      "https://maps.google.com/maps?q=Etec%20Itaquera%20II%2C%20S%C3%A3o%20Paulo&z=15&output=embed",
    flyer: "/convites/convite-08-10.jpeg",
    start: "2026-10-08T18:30:00-03:00",
    end: "2026-10-08T21:00:00-03:00",
  },
];

export const objectives = [
  { n: "01", t: "Formação", d: "Aperfeiçoamento, atualização e troca de conhecimento sobre os esportes de contato." },
  { n: "02", t: "Inclusão", d: "Artes marciais como caminho de inclusão, para pessoas com e sem deficiência." },
  { n: "03", t: "Cidadania", d: "Envolver os jovens estudantes na formação de cidadãos mais conscientes e engajados." },
  { n: "04", t: "Pesquisa e prática", d: "Profissionais apresentam pesquisas e experiências de acessibilidade e empoderamento." },
  { n: "05", t: "Responsabilidade social", d: "Cada ingresso vira um brinquedo doado a uma criança da região." },
];

export const steps = [
  { n: "1", t: "Inscreva-se", d: "Gratuito, pelo site do evento." },
  { n: "2", t: "Separe um brinquedo", d: "Novo ou usado em bom estado." },
  { n: "3", t: "Entregue na recepção", d: "A partir das 18h30, em qualquer uma das noites." },
];

export const schedule = [
  { time: "18h30", t: "Recepção", d: "Credenciamento e entrega dos brinquedos" },
  { time: "19h00", t: "Abertura oficial", d: "Boas-vindas da OPAM e da Etec" },
  { time: "19h15", t: "Palestras", d: "Pesquisa, inclusão, esporte e responsabilidade social" },
  { time: "21h00", t: "Encerramento", d: "Homenagens e considerações finais" },
];

export const values = [
  "Respeito",
  "Inclusão",
  "Superação",
  "Igualdade",
  "Disciplina",
  "Tradição com inovação",
  "Acessibilidade",
];

export const partners = [
  { t: "Centro Olímpico do Conjunto José Bonifácio", d: "Direção de Márcio de Oliveira" },
  { t: "Etec Itaquera II", d: "Direção da Profa. Me. Tarsila Santiago" },
  { t: "Extensão CEU Quinta do Sol", d: "Coordenação de Orlando" },
];

export const perks = [
  { t: "Parceria", d: "Vínculo com a comunidade das artes marciais e com a Etec." },
  { t: "Visibilidade", d: "Sua marca no site, nas duas noites e na comunicação." },
  { t: "Impacto social", d: "Apoio direto a educação, inclusão e à ação solidária." },
];

export const audience = [
  "Estudantes da Etec",
  "Praticantes de artes marciais",
  "Profissionais de Educação Física",
  "Professores e pesquisadores",
  "Familiares",
  "Comunidade em geral",
];

export const faq = [
  { q: "Quanto custa participar?", a: "Nada. A inscrição é gratuita — o ingresso é um brinquedo, entregue na entrada." },
  { q: "Posso ir nas duas noites?", a: "Pode. Cada noite acontece em uma unidade: 05/10 na Extensão CEU Quinta do Sol e 08/10 na Etec Itaquera II." },
  { q: "Que tipo de brinquedo posso levar?", a: "Novo ou usado em bom estado. Os brinquedos vão para crianças em situação de vulnerabilidade da região, no Dia das Crianças e no Natal." },
  { q: "Quem pode participar?", a: "O evento é aberto à comunidade: estudantes da Etec, praticantes de artes marciais, profissionais de Educação Física, professores, pesquisadores, familiares e interessados no tema." },
  { q: "Que horas devo chegar?", a: "A recepção começa às 18h30. A abertura oficial é às 19h e o encerramento, com homenagens, às 21h." },
  { q: "Como falo com a organização?", a: "Pelo WhatsApp (11) 96939-2260, com o Sensei Bruno — para dúvidas, participação ou patrocínio." },
];
