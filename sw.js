// Educational Apps By Akbar Ali Khan - Main SW - FIXED
const CACHE_NAME = 'edu-apps-v2-fixed';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // FIX: Constitution aur dosre sub-apps ko ignore karo
  if (url.pathname.startsWith('/constitution/') || 
      url.pathname.startsWith('/nts-teachers/') ||
      url.pathname.startsWith('/study-abroad/') ||
      url.pathname.startsWith('/mdcat/') ||
      url.pathname.startsWith('/ecat/') ||
      url.pathname.startsWith('/lat/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
