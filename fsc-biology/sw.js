// FSc Biology SW - FINAL v5 - No Fail Install - Same as Constitution
const CACHE_NAME = 'fsc-bio-v5';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => { if(k !== CACHE_NAME) return caches.delete(k); }))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if(e.request.url.includes('goatcounter') || e.request.url.includes('zgo.at')){ return; }
  e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
});
