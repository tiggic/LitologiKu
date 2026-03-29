/* ═══════════════════════════════════════════════════
   LitologiKu Pro — Service Worker
   Versi: 1.0.0
   Strategi: Cache-First untuk assets, Network-First untuk data
   ═══════════════════════════════════════════════════ */

const CACHE_NAME = 'litologiku-pro-v3';
const OFFLINE_URL = './LitologiKu_Pro_9.html';

/* Semua asset yang akan di-cache saat install */
const PRECACHE_ASSETS = [
  './LitologiKu_Pro_9.html',
  './manifest.json',
  /* jsPDF dari CDN — di-cache saat pertama diload */
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
];

/* ── INSTALL: cache semua asset utama ── */
self.addEventListener('install', event => {
  console.log('[SW] Installing LitologiKu Pro Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching assets');
      /* Gunakan individual add agar satu gagal tidak batalkan semua */
      return Promise.allSettled(
        PRECACHE_ASSETS.map(url =>
          cache.add(url).catch(err =>
            console.warn(`[SW] Gagal cache: ${url}`, err)
          )
        )
      );
    }).then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: hapus cache lama ── */
self.addEventListener('activate', event => {
  console.log('[SW] Activating LitologiKu Pro Service Worker...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Menghapus cache lama:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: Cache-First dengan Network Fallback ── */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  /* Lewati request non-GET */
  if (request.method !== 'GET') return;

  /* Lewati chrome-extension dan resource lain yang tidak relevan */
  if (!url.protocol.startsWith('http')) return;

  /* Strategi untuk Google Fonts: Network-First, cache jika berhasil */
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(networkFirstStrategy(request));
    return;
  }

  /* Untuk semua asset lainnya: Cache-First */
  event.respondWith(cacheFirstStrategy(request));
});

/* ── Cache-First Strategy ── */
async function cacheFirstStrategy(request) {
  const cached = await caches.match(request);
  if (cached) {
    /* Perbarui cache di background (stale-while-revalidate) */
    fetchAndCache(request);
    return cached;
  }
  return fetchAndCache(request);
}

/* ── Network-First Strategy ── */
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    /* Jika tidak ada cache dan offline, kembalikan halaman utama */
    if (request.destination === 'document') {
      return caches.match(OFFLINE_URL);
    }
    throw err;
  }
}

/* ── Helper: Fetch lalu cache ── */
async function fetchAndCache(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type !== 'opaque') {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    /* Offline: coba ambil dari cache */
    const cached = await caches.match(request);
    if (cached) return cached;

    /* Fallback ke halaman utama jika dokumen */
    if (request.destination === 'document') {
      return caches.match(OFFLINE_URL);
    }
    throw err;
  }
}

/* ── Handle pesan dari halaman (misal: skip waiting) ── */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
