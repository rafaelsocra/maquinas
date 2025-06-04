
const imagens = [
  "imagens/img1.jpg",
  "imagens/img2.jpg",
  "imagens/img3.jpg"
];
const sons = [
  "sons/som1.mp3",
  "sons/som2.mp3",
  "sons/som3.mp3"
];

function novaCombinacao() {
  let i1 = Math.floor(Math.random() * imagens.length);
  let i2;
  do {
    i2 = Math.floor(Math.random() * imagens.length);
  } while (i1 === i2);

  let s = Math.floor(Math.random() * sons.length);

  document.getElementById("img1").src = imagens[i1];
  document.getElementById("img2").src = imagens[i2];
  let audio = document.getElementById("audio");
  audio.src = sons[s];
  audio.play();
}

window.onload = novaCombinacao;
