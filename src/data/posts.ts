import { OPAM_URL, WHATSAPP_URL } from "@/lib/config";

export type PostLink = { label: string; href: string };

export type PostBlock =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { links: PostLink[] }
  | { instagram: { href: string; caption: string } };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  category: string;
  minutes: number;
  image: { src: string; width: number; height: number; alt: string };
  body: PostBlock[];
};

export const OPAM_POST_URL = `${OPAM_URL}blog/curso-primeiros-socorros-para-atletas`;

const GRUPO_LAKE_URL = "https://grupolake.com.br";
const INSTRUCTOR_URL = "https://www.instagram.com/prof_wagner_cortez/";

const firstAidCourse: Post = {
  slug: "curso-primeiros-socorros-para-atletas",
  title: "CODEC apoia o Curso de Primeiros Socorros para Atletas",
  excerpt:
    "No dia 28 de novembro, em Itaquera, a OPAM realiza um curso prático de primeiros socorros esportivos com o Prof. Wagner Cortez. O CODEC apoia a iniciativa.",
  date: "2026-10-29",
  category: "Apoio",
  minutes: 3,
  image: {
    src: "/blog/curso-primeiros-socorros-para-atletas.jpeg",
    width: 1086,
    height: 1448,
    alt: "Cartaz do Curso de Primeiros Socorros para Atletas, 28 de novembro, Academia Cross Fênix",
  },
  body: [
    {
      p: "O CODEC nasceu para fortalecer os esportes de contato, e isso inclui cuidar de quem pratica. É por isso que apoiamos o Curso de Primeiros Socorros para Atletas, realizado pela [OPAM](https://www.karateopam.com.br/) no sábado, 28 de novembro.",
    },
    { h2: "O que será ensinado" },
    {
      ul: [
        "Primeiros socorros esportivos",
        "Técnicas de imobilização",
        "Atendimento de emergência",
        "Técnicas essenciais para salvar vidas",
      ],
    },
    {
      p: "O curso é prático e usa os materiais necessários para treinar cada técnica. A ideia é que atletas, professores e familiares saiam sabendo como agir nos primeiros minutos de uma emergência.",
    },
    { h2: "Com quem" },
    {
      p: "Quem ministra é o Prof. Wagner Cortez Domingos, gestor de segurança pública e privada, técnico de enfermagem do trabalho e instrutor de formação de bombeiros. Ele é o responsável pelo curso.",
    },
    { links: [{ label: "Perfil do Prof. Wagner Cortez no Instagram", href: INSTRUCTOR_URL }] },
    { h2: "Serviço" },
    {
      ul: [
        "Data: sábado, 28 de novembro",
        "Horário: das 11h às 15h",
        "Local: Academia Cross Fênix, R. Sabbado D'Ângelo, 1369, Itaquera, São Paulo (próximo à estação Dom Bosco)",
        "Investimento: R$ 50, com 25 vagas",
        "Dois certificados: um impresso, emitido pela organização, e outro digital, do palestrante",
      ],
    },
    { h2: "Como se inscrever" },
    {
      ul: [
        "Pague R$ 50 por Pix, para o celular (11) 96939-2260.",
        "Envie o seu nome completo, como deve constar no certificado.",
      ],
    },
    {
      p: "Pronto, a inscrição está feita. Com poucas vagas, o ideal é não deixar para a última hora.",
    },
    { h2: "Conheça a OPAM" },
    {
      p: "O curso é uma realização da [OPAM](https://www.karateopam.com.br/), a Organização Paulista de Artes Marciais, que também é responsável pelo CODEC. Todos os detalhes estão no post original, no site do Karatê OPAM.",
    },
    {
      links: [
        { label: "Leia este post no site do Karatê OPAM", href: OPAM_POST_URL },
        { label: "Conheça o Karatê OPAM", href: OPAM_URL },
      ],
    },
    {
      instagram: {
        href: "https://www.instagram.com/p/DfFdGBcAszW/",
        caption:
          "A preparação vai além do tatame. Estar pronto para cuidar do próximo também faz parte do nosso compromisso com o esporte e com a vida.",
      },
    },
    {
      p: "A divulgação do curso nos sites da [OPAM](https://www.karateopam.com.br/) e do CODEC foi feita em parceria com o Grupo Lake.",
    },
    { links: [{ label: "Grupo Lake", href: GRUPO_LAKE_URL }] },
  ],
};

export const POSTS: Post[] = [firstAidCourse].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const REGISTRATION_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Olá! Quero me inscrever no Curso de Primeiros Socorros para Atletas (28/11).",
)}`;

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T12:00:00-03:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
