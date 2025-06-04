async function novaCombinacao() {
  try {
    const resposta = await fetch('dados.json');
    const dados = await resposta.json();

    const imagens = dados.imagens.map(img => `imagens/${img}`);
    const sons = dados.sons.map(som => `sons/${som}`);

    let i1 = Math.floor(Math.random() * imagens.length);
    let i2;
    do {
      i2 = Math.floor(Math.random() * imagens.length);
    } while (i1 === i2);

    let s = Math.floor(Math.random() * sons.length);

    document.getElementById("img1").src = imagens[i1];
    document.getElementById("img2").src = imagens[i2];

    const audio = document.getElementById("audio");
    audio.src = sons[s];
    audio.play();
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
  }
}

window.onload = novaCombinacao;
