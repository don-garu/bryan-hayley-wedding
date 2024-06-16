const CACHE_NAME = 'image-cache-v1';
const urlsToCache = [
    "./pictures/main.jpeg",
    "./pictures/a1.jpeg",
    "./pictures/a2.jpeg",
    "./pictures/a3.jpeg",
    "./pictures/b1.jpeg",
    "./pictures/b2.jpeg",
    "./pictures/b3.jpeg",
    "./pictures/c1.jpeg",
    "./pictures/c2.jpeg",
    "./pictures/c3.jpeg",
    "./pictures/d1.jpeg",
    "./pictures/d2.jpeg",
    "./pictures/d3.jpeg",
    "./pictures/e1.jpeg",
    "./pictures/e2.jpeg",
    "./pictures/e3.jpeg",
    "./pictures/f1.jpeg",
    "./pictures/f2.jpeg",
    "./pictures/f3.jpeg"
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.match(/\.(jpg|jpeg|png|gif)$/)) {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then((response) => {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, response.clone()).then(r => r);
                            return response;
                        });
                    });
                })
        );
    }
});