importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

// const workboxBuild = require('workbox-build');
//
// // NOTE: This should be run *AFTER* all your assets are built
// const buildSW = () => {
//   // This will return a Promise
//   return workboxBuild.injectManifest({
//     swSrc: 'src/sw.js',
//     swDest: 'build/sw.js',
//     globDirectory: 'build',
//     globPatterns: [
//       '**\/*.{js,css,html,png}',
//     ]
//   });
// }
//
// buildSW();


workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.html/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'html-cache',
  })
);


workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 20,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }
