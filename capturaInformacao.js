// pegar clicar
const botoes = document.querySelectorAll(".roteiro-comprar");
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // pega as informações 
    const destino = document.querySelector(".roteiro-destino").textContent;
    const inclusos = document.querySelectorAll(".roteiro-incluso li").map((li) => li.textContent);
    const preco = document.querySelector(".roteiro-preco").textContent;
    const obs = document.querySelector(".roteiro-obs").textContent;
    const parcelamento = document.querySelector(".roteiro-parcelamento").textContent;

    // Cria um objeto JSON 
    const pacoteTuristico = {
      destino,
      inclusos,
      preco,
      obs,
      parcelamento,
    };

    // Imprime o  JSON 
    console.log(pacoteTuristico);
    alert(pacoteTuristico);
  });
});
