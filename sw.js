// Listen for install event
self.addEventListener("install", (event) => {
  console.log("SoftCloud Service Worker installed");
  self.skipWaiting(); // immediately activate the SW
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("SoftCloud Service Worker activated");
});

// Fetch handler (required for some browsers to trigger PWA install)
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
