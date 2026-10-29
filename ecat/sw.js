const CACHE_NAME = "ecat-v1";
const ASSETS = [
  "/iphone-apps.github.io/ecat/",
  "/iphone-apps.github.io/ecat/index.html",
  "/iphone-apps.github.io/ecat/manifest.json",
  "/iphone-apps.github.io/ecat/icons-ecat.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
