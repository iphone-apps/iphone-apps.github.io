const CACHE_NAME = 'constitution-pk-v4';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons-constitution.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => { if(k !== CACHE_NAME) return caches.delete(k); })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if(e.request.url.includes('goatcounter') || e.request.url.includes('gc.zgo.at')){
    return;
  }
  e.respondWith(
    fetch(e.request).catch(()=> caches.match(e.request))
  );
});
