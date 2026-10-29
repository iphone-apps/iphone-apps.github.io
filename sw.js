const CACHE='edu-main-v6';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json'])));});
self.addEventListener('fetch',e=>{
  const url=e.request.url;
  if(url.includes('/universal-wps/')||url.includes('/study-abroad/')||url.includes('/nts-teachers/')||url.includes('/mdcat/')||url.includes('/ecat/')||url.includes('/lat/')||url.includes('/logical/')||url.includes('/fsc-')||url.includes('/hssc-')||url.includes('/constitution/')||url.includes('/translator/')||url.includes('/converter/')) return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
