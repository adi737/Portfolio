if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );

  // Global workbox
  if (workbox) {
    console.log("Workbox is loaded");

    // Disable logging
    workbox.setConfig({ debug: false });

    //`generateSW` and `generateSWString` provide the option
    // to force update an exiting service worker.
    // Since we're using `injectManifest` to build SW,
    // manually overriding the skipWaiting();
    self.addEventListener("install", (event) => {
      self.skipWaiting();
      window.location.reload();
    });

    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.
    workbox.precaching.precacheAndRoute([
  {
    "url": "img/dish.png",
    "revision": "0849580659eb7fa91b24e58025e752eb"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "846eb9efd55bbb4d770072a7048b7855"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "8830d5a5aa2b7305770071f24e0ab4cc"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "8cf539d61d2e963342297268f5d4f2d6"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "2d66cb649b1d5984fac30d2e844da231"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "0b474229723c95af2a65a04802c7f4fe"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "5d4a25db856285ec3b9f78e87e8dbabb"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "e805792f5d7934cc89d5cb540b13fa27"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "6e89d3d0eeeeb0e6a51b83e559b39a8a"
  },
  {
    "url": "index.html",
    "revision": "fe0c3560272fff49a391d8acf9213173"
  },
  {
    "url": "precache-manifest.f00a8b087dd33acb6d2d21dde74d4c2e.js",
    "revision": "f00a8b087dd33acb6d2d21dde74d4c2e"
  },
  {
    "url": "service-worker.js",
    "revision": "07808b55582294eb2a0e55aa73aef597"
  },
  {
    "url": "static/css/main.c2110752.chunk.css",
    "revision": "15d1db5d6c9dc49dfa16760d3d360e51"
  },
  {
    "url": "static/js/2.9d6a07d9.chunk.js",
    "revision": "4dc289ca9155804303d43e5fab4db1db"
  },
  {
    "url": "static/js/main.b26b8d85.chunk.js",
    "revision": "f89e286a5e9d57f387f4316080f561e7"
  },
  {
    "url": "static/js/runtime-main.e1c49509.js",
    "revision": "6af40376935f6263b90032e36be2f6ab"
  },
  {
    "url": "static/media/html-1300.50ddaf8b.png",
    "revision": "50ddaf8b297d1c1b85feb8e585b2e6ed"
  },
  {
    "url": "static/media/html-300.5b8f0c36.png",
    "revision": "5b8f0c365ac53f38b2508701c277ecf4"
  },
  {
    "url": "static/media/linkedin.4eafd5a3.svg",
    "revision": "4eafd5a309a11425448bda0f61ed2781"
  },
  {
    "url": "static/media/react-120.76228491.png",
    "revision": "76228491f798646acd14226db367ade5"
  },
  {
    "url": "static/media/react-500.e467fe80.png",
    "revision": "e467fe800cb3a4785bc973646de5f8f3"
  }
]);

    // Font caching
    workbox.routing.registerRoute(
      new RegExp("https://fonts.(?:.googlepis|gstatic).com/(.*)"),
      workbox.strategies.cacheFirst({
        cacheName: "googleapis",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
          }),
        ],
      })
    );

    // Image caching
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    // JS, CSS caching
    workbox.routing.registerRoute(
      /\.(?:js|css)$/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: "static-resources",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 20 * 24 * 60 * 60, // 20 Days
          }),
        ],
      })
    );
  } else {
    console.error("Workbox could not be loaded. No offline support");
  }
}