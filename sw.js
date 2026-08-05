const CACHE_NAME = "filmes-e-series-v2";

const ARQUIVOS_PARA_CACHE = [
  "index.html",
  "filmes.html",
  "series.html",
  "recomendacoes.html",
  "styles.css",
  "manifest.json",
  "192.png",
  "512.png",
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARQUIVOS_PARA_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nomes) =>
      Promise.all(
        nomes
          .filter((nome) => nome !== CACHE_NAME)
          .map((nome) => caches.delete(nome))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (evento) => {
  evento.respondWith(
    caches.match(evento.request).then((respostaCache) => {
      return (
        respostaCache ||
        fetch(evento.request)
          .then((respostaRede) => {
            const copia = respostaRede.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(evento.request, copia));
            return respostaRede;
          })
          .catch(() => respostaCache)
      );
    })
  );
});
