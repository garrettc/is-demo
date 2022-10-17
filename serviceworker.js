const version = 'V1.0';
const staticCacheName = version + '-staticfiles';

// Install event
addEventListener('install', installEvent => {
    console.log('The service worker is installing...');
    skipWaiting(); // Take over as soon as installed, don't wait for a restart.
    installEvent.waitUntil(
        // Cache files
        caches.open(staticCacheName)
        .then(staticCache => {
            // Nice to haves (don't block installation)
            staticCache.addAll([
            ]);
            // Must-haves return immeadiately
            return staticCache.addAll([
            ]);
        })
        .catch(error => {
            // Not much we can do here
        })
    );
});

// Activate event
addEventListener('activate', activateEvent => {
    console.log('The service worker is activated.');
    activateEvent.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName != staticCacheName) {
                        // Delete old caches
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            // Ensure service worker takes control without waiting for refresh
            return clients.claim();
        })
    );
});

addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    fetchEvent.respondWith(
        caches.match(request)
        .then(responseFromCache => {
            // If we get a cache hit and it's not null, return the cached version
            if (responseFromCache) {
                return responseFromCache;
            }
            // Else fetch from the network
            return fetch(request)
            .catch(error => {
                // But if it barfs, we're offline
                return caches.match('/static/offline.html');
            });
        })
    );
});
