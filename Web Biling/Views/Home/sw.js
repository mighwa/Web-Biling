self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Aktif');
});

// Fungsi untuk menangkap perintah notifikasi
self.addEventListener('push', function(event) {
  const options = {
    body: 'Waktu billing sudah habis!',
    icon: 'https://cdn-icons-png.flaticon.com/512/681/681123.png',
    vibrate: [200, 100, 200],
    data: { dateOfArrival: Date.now() }
  };
  event.waitUntil(
    self.registration.showNotification('QNR PLAYSTATION', options)
  );
});