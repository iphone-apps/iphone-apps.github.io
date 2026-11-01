const CACHE_NAME = "funny-jokes-v1";
const urlsToCache = [
  "index.html",
  "eng.html","ur.html","pa.html","ar.html",
  "hi.html","ch.html","fr.html","jp.html",
  "sp.html","gr.html","ra.html","tr.html",
  "kr.html","ml.html","in.html","ph.html",
  "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
