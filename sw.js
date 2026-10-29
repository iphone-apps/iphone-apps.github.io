const CACHE='edu-main-final-v7';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/','/index.html','/manifest.json'])));});
self.addEventListener('fetch',e=>{
  const u=e.request.url;
  if(u.includes('/universal-wps/')||u.includes('/study-abroad/')||u.includes('/nts-teachers/')||u.includes('/mdcat/')||u.includes('/ecat/')||u.includes('/lat/')||u.includes('/logical/')||u.includes('/fsc-')||u.includes('/hssc-')||u.includes('/constitution/')||u.includes('/translator/')||u.includes('/converter/')) return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
