'use strict';
const CACHE='pct-technician-mobile-3.1.0-r1';
const FILES=['./','./index.html','./app.css','./app.js','./catalog.js','./exports.js','./calculator.js','./drafts.js','./mascot.js','./update-key.js','./vendor/qrcode.js','./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest','./qr/line.svg','./qr/payment.svg','./qr/survey-air.svg','./qr/survey-washer.svg'];
const BASE=new URL('./',self.location.href);
const ASSETS=new Set(FILES.map(p=>new URL(p,BASE).pathname));
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(p=>new Request(new URL(p,BASE),{cache:'reload',credentials:'same-origin'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('pct-xiaomi-service-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);if(req.method!=='GET'||url.origin!==BASE.origin||!ASSETS.has(url.pathname))return;
 event.respondWith(caches.open(CACHE).then(async cache=>{const hit=await cache.match(req,{ignoreSearch:true});if(hit)return hit;const response=await fetch(req);if(response.ok&&response.type==='basic')await cache.put(req,response.clone());return response;}));
});
