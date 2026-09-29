const files: [string, string][] = [
  ["sublita.jpeg", "Sublita Personalizados"],
  ["centro-olimpico.jpeg", "Centro Olímpico"],
  ["fato-paulista.jpeg", "Fato Paulista"],
  ["etec.webp", "ETEC Itaquera II"],
  ["gabriel-abreu.jpeg", "Gabriel Abreu"],
  ["renata-abreu.jpeg", "Renata Abreu"],
  ["action-figure.jpeg", "Action Figure Collection"],
  ["itachaves.jpeg", "Ita Chaves"],
  ["giacco-becas.jpeg", "Giacco Becas"],
  ["compra-facil.jpg", "Compra Fácil Supermercados"],
  ["microlins.jpeg", "Microlins Artur Alvim"],
  ["dom-bosco.jpeg", "Obra Social Dom Bosco"],
  ["luis-bellu.jpeg", "Luis Bellu Fotografias"],
  ["trofeu-e-medalhas-globo.jpeg", "Troféus e Medalhas Globo"],
];

export const supporters = files.map(([file, name]) => ({
  img: `/${file}`,
  name,
}));
