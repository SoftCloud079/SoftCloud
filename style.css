// sw.js — Service Worker
const CACHE_NAME = 'softcloud-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/projects.html',
  '/shop.html',
  '/team.html',
  '/style.css',
  '/images/favicon.png',
  '/images/favicon-512PX.png'
];

// Install event — cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // activate immediately
});

// Activate event — cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      )
    )
  );
  self.clients.claim(); // take control immediately
});

// Fetch event — serve cached content first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request);
    })
  );
});