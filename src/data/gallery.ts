export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const photo = (
  n: string,
  width: number,
  height: number,
  alt: string,
): GalleryPhoto => ({ src: `/2-codec/${n}.jpeg`, alt, width, height });

/** Ordem de curadoria: as primeiras são as melhores (a home usa as destacadas). */
export const photos: GalleryPhoto[] = [
  photo("01", 1220, 863, "Participantes e organizadores diante do painel do CODEC"),
  photo("02", 1141, 705, "Organizadores e palestrantes com os troféus diante do banner do 2º CODEC"),
  photo("03", 960, 1280, "Auditório lotado durante a cerimônia, com a bandeira do Brasil ao fundo"),
  photo("04", 3520, 1980, "Cinco homenageados com o troféu Honra ao Mérito"),
  photo("05", 1600, 1201, "Organização no palco, ao lado do telão do evento"),
  photo("06", 1600, 1200, "Banner do 2º CODEC, Congresso de Desenvolvimento nos Esportes de Contato"),
  photo("07", 1179, 861, "Dois organizadores com o troféu Honra ao Mérito diante do banner"),
  photo("08", 1600, 1201, "Palestrante apresentando ao lado do painel do CODEC"),
  photo("09", 1200, 1600, "Dupla de organizadores diante do banner do evento"),
  photo("10", 1200, 1600, "Palestrante falando sobre inclusão e direitos"),
  photo("11", 1200, 1600, "Palestrante de camisa jeans falando ao microfone"),
  photo("12", 1200, 1600, "Entrega do troféu Honra ao Mérito a uma palestrante de jeans"),
  photo("13", 1200, 1600, "Entrega do troféu Honra ao Mérito a uma palestrante"),
  photo("14", 1200, 1600, "Entrega do troféu Honra ao Mérito a uma palestrante de blusa preta"),
  photo("15", 1200, 1600, "Troféu Honra ao Mérito nas mãos de uma apoiadora"),
  photo("16", 1201, 1600, "Três participantes mostrando as medalhas do evento"),
  photo("17", 1201, 1600, "Organização no palco durante a abertura"),
  photo("18", 960, 1280, "Entrega de troféu a uma participante de blusa verde"),
  photo("19", 960, 1280, "Entrega de troféu a uma participante de vestido marrom"),
  photo("20", 960, 1280, "Homenageado com troféu e livro ao lado de um organizador"),
  photo("21", 3024, 4032, "Organizador e palestrante diante do slide de considerações finais"),
  photo("22", 960, 1280, "Entrega de troféu a uma palestrante de blusa vermelha"),
];

export const VIDEO_SRC = "/2-codec/video-01.mp4";

/** Índices (em `photos`) das fotos exibidas na home. */
export const highlights = [0, 3, 1, 4, 15, 2];
