// Associa um evento click em cada botão
const botoes = document.querySelectorAll(".roteiro-comprar");
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Captura as informações do pacote turístico
    const destino = document.querySelector(".roteiro-destino").textContent;
    const inclusos = document.querySelectorAll(".roteiro-incluso li").map((li) => li.textContent);
    const preco = document.querySelector(".roteiro-preco").textContent;
    const obs = document.querySelector(".roteiro-obs").textContent;
    const parcelamento = document.querySelector(".roteiro-parcelamento").textContent;

    // Cria um objeto JSON com as informações capturadas
    const pacoteTuristico = {
      destino,
      inclusos,
      preco,
      obs,
      parcelamento,
    };

    // Imprime o objeto JSON no console
    console.log(pacoteTuristico);
    alert(pacoteTuristico);
  });
});
