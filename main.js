const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-10-05t00:00:00");
const tempoObjetivo2 = new date("2025-12-05t00:00:00");
const tempoObjetivo3 = new Date("2025-12-30t00:00:00");
const tempoObjetivo4 = new Date("2024-02-01t00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3,
                                                       tempoObjetivo4];
function calculatempo(tempoObjetivo) {
    let tempoatual = new Date ();
    let tempofinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempofinal / 1000);
    let minutos =Math.floor(segundos/ 60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos%= 60;
    minutos %= 60;
    horas %= 24
    if (tempoFinal > 0)
        return dias + " dias"
}      
