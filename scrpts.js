let btnMenu = document.getElementById("btn-menu");
let btnAssistir = document.getElementById("btn-assistir");
let btnContato = document.getElementById("btn-contato");
let btnFilme = document.getElementById("btn-filmes");
let btnFilme = document.getElementById("btn-series");

btnMenu.addEventListener("click", menu);
btnAssistir.addEventListener("click", assistir);
btnContato.addEventListener("click", contato);
btnFilmes.addEventListener("click", filmes);
btnFilmes.addEventListener("click", series);

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
    window.location.href = "#contato";
}