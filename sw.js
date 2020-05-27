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
    "url": "images/icons/icon-128x128.png",
    "revision": "6d01b244331530e314fc924ff013b2a6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "e17e85d4ff20a4b53b67a75f9c901c1f"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "57729725fdd83fd9b1cd0a9d393cfec7"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "0d9290c6d9101e8b02330aaefac39ad8"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "49f98a3e662acefe7ce20896012c3059"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "56536dd69fc29a5719f8b5d48c76ec73"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "6c9697f9f3abde6020fececae0b27ebb"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0f6d3a2a03e9e307743ac43f0bf3efde"
  },
  {
    "url": "index.html",
    "revision": "2e1dd4d75f31c717586e8564243fad86"
  },
  {
    "url": "precache-manifest.17ea19fcde7d3b859d28de3d49f5a422.js",
    "revision": "17ea19fcde7d3b859d28de3d49f5a422"
  },
  {
    "url": "service-worker.js",
    "revision": "e960429ebcc69da8d79b7401ae14793c"
  },
  {
    "url": "static/css/3.6b061651.chunk.css",
    "revision": "24606e85f816be1628bd71ff687ed45d"
  },
  {
    "url": "static/css/4.9f7beb6c.chunk.css",
    "revision": "8c16ae92dd3f54f80a9616cfcd5bfe07"
  },
  {
    "url": "static/css/main.1569dbac.chunk.css",
    "revision": "d2aead9d3f1b443d81c17fad285ed896"
  },
  {
    "url": "static/js/2.4061d320.chunk.js",
    "revision": "26e5fb01270b38292c864a41a05c1313"
  },
  {
    "url": "static/js/3.e7033f68.chunk.js",
    "revision": "9844557100c5de59f011ced6d54d9b01"
  },
  {
    "url": "static/js/4.e1db00a7.chunk.js",
    "revision": "bed4824638e961af8d16914994c622a4"
  },
  {
    "url": "static/js/main.cae86ed0.chunk.js",
    "revision": "314a002d936deef12956e931d1a94b3c"
  },
  {
    "url": "static/js/runtime-main.2be7fb70.js",
    "revision": "27e85344f0b8fab663b798a744a54fe5"
  },
  {
    "url": "static/media/background-navyblue.7f265ae7.png",
    "revision": "7f265ae79733166ad09cf18e63255654"
  },
  {
    "url": "static/media/git.c5812579.png",
    "revision": "c58125799213b84c2669eebf6bfcc2d7"
  },
  {
    "url": "static/media/html-1300.351c2e7f.png",
    "revision": "351c2e7f3b1238707d410fb889cbf70d"
  },
  {
    "url": "static/media/html-300.a2ca5c26.png",
    "revision": "a2ca5c26caac379bced447e42e5ec846"
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
  },
  {
    "url": "static/media/sass-128.12e549c9.png",
    "revision": "12e549c940fa2a1bb5589d227d446f92"
  },
  {
    "url": "static/media/sass-512.86be5227.png",
    "revision": "86be5227507d2529ce4f31546f0f2f26"
  },
  {
    "url": "static/media/todo.a67d78db.png",
    "revision": "a67d78dbae5b6d3ede806d4ca8b5707b"
  },
  {
    "url": "static/media/weather.802a45de.png",
    "revision": "802a45dec404d1e3701b5ef0e91561e7"
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