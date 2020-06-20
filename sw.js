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
    "revision": "c62de457dc5ac86781c9d5f36cfe0605"
  },
  {
    "url": "precache-manifest.c7260deac7990bfa5aac44cd6889f512.js",
    "revision": "c7260deac7990bfa5aac44cd6889f512"
  },
  {
    "url": "service-worker.js",
    "revision": "968b43aee295ac0796e972098728380e"
  },
  {
    "url": "static/css/main.685a40d8.chunk.css",
    "revision": "1338d51f07c56db4b8af8954fdfa0c41"
  },
  {
    "url": "static/js/2.3bfe4832.chunk.js",
    "revision": "4c26b98d234cfe73ff905bb11e4a70ab"
  },
  {
    "url": "static/js/3.a9e8568c.chunk.js",
    "revision": "f808f49b9c417445af0dc8839715b577"
  },
  {
    "url": "static/js/4.0697f677.chunk.js",
    "revision": "5174487101e8997598c18effbe76f7ff"
  },
  {
    "url": "static/js/5.1a9fe387.chunk.js",
    "revision": "268bb6efaf0867f7e0a3c475ad29d30e"
  },
  {
    "url": "static/js/6.fb609096.chunk.js",
    "revision": "387bc6987830df7a8ad5f328ebc2329c"
  },
  {
    "url": "static/js/7.1b3cc320.chunk.js",
    "revision": "edf3aa410cdb2c5242b3e3dfb4ee5856"
  },
  {
    "url": "static/js/main.9dee0fba.chunk.js",
    "revision": "f963d01a1e024bb9e17d51bd826c9d7c"
  },
  {
    "url": "static/js/runtime-main.56151ed5.js",
    "revision": "6808acff414849b5183d87a54087067b"
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
    "url": "static/media/linkedin.94025d95.svg",
    "revision": "94025d95f969a661b109aab906d63047"
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