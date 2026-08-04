let btnMenu = document.getElementById("btn-menu");
let btnAssistir = document.getElementById("btn-assistir");
let btnContato = document.getElementById("btn-contato");
let btnFilme = document.getElementById("btn-filmes");
let btnSerie = document.getElementById("btn-series");
let btnRecomendacoes = document.getElementById("btn-recomendacoes");

btnMenu.addEventListener("click", menu);
btnAssistir.addEventListener("click", assistir);
btnContato.addEventListener("click", contato);
btnFilme.addEventListener("click", filmes);
btnSerie.addEventListener("click", series);
btnRecomendacoes.addEventListener("click", recomendacoes);

function menu() {
    window.location.href = "index.html";
}

function filmes() {
    window.location.href = "filmes.html";
}

function series() {
    window.location.href = "series.html";
}

function assistir() {
    window.location.href = "filmes.html#onde-assistir";
}

function contato() {
    window.location.href = "index.html#contato";
}

function recomendacoes() {
    window.location.href = "recomendacoes.html";
}