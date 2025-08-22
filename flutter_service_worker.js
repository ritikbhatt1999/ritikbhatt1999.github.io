'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "913cbe9bc147dd0ebfde89ec15c85926",
"version.json": "74f80ac8e98b6ba209e4eb96eb7f918f",
"index.html": "7c654d70a5ae34511921ca69b4dad81c",
"/": "7c654d70a5ae34511921ca69b4dad81c",
"main.dart.js": "b3abe0f09eac37eb63b99cf2e40f52c1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "fd7a63a5e862dd282325ab42b5e97e55",
"icons/Icon-192.png": "d755c88abb7ed4f4c37386e60ade917e",
"icons/Icon-maskable-192.png": "d755c88abb7ed4f4c37386e60ade917e",
"icons/Icon-maskable-512.png": "fba313d5d6a3516cd257a3865e11e1b3",
"icons/Icon-512.png": "fba313d5d6a3516cd257a3865e11e1b3",
"manifest.json": "4c8598061dee6a2a3c9fb1195adf245e",
"assets/AssetManifest.json": "ba3ffee2c38bb955a934086a12f16640",
"assets/NOTICES": "42fd5db7e7bbbd15dd881e0597a645e5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fe10d17930a59e98305d494b1d3a2898",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7f5dc42588cdb27e99ed907202f6518",
"assets/fonts/MaterialIcons-Regular.otf": "bef5e89f8e7444af1da31bd1421f790e",
"assets/assets/images/profile.jpeg": "4d983a11b63afd9838372df56ca901b6",
"assets/assets/icons/icon-design.svg": "a7b670ca766e02c561b2b5ca8e17ec41",
"assets/assets/icons/git.png": "964861c9b224efa8f63796e2c2b2bd65",
"assets/assets/icons/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/icons/flutter.png": "7ad12a2c2ff3eb299522c9c70cfdc66e",
"assets/assets/icons/sql.png": "e4d536b1a07294afad43045def94294f",
"assets/assets/icons/github.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/icons/firebase.png": "062e4711bcf73378286b69e77cd52ec8",
"assets/assets/icons/js.png": "d9de75e5bf3a7b0ef2a48321acc06e88",
"assets/assets/icons/figma.png": "ad89f319db0073eda2892624a51a4b2b",
"assets/assets/icons/html.jpeg": "a712f9e1464290cf3bf1ec2e7dbf4acb",
"assets/assets/icons/excel.png": "727de60754cedcf0e0e3c2e4819d0ad2",
"assets/assets/icons/bloc.png": "a29df297e867cef24b1f52cbb4cee72a",
"assets/assets/icons/react.png": "be3668f7ecbe460befcb22b9a8a87792",
"assets/assets/icons/xcode.jpeg": "ccbd3784c5807bf7cae4fe78fa5de54d",
"assets/assets/icons/postman.png": "595e6b03143e1b386930255a5cd22be3",
"assets/assets/icons/icon-dev.svg": "772f7e9763d8282ad7f28f19f28e2aec",
"assets/assets/icons/app_logo.png": "f9c4afe2e03eefae54ca4bbe87b8a0ae",
"assets/assets/icons/androidStudio.png": "b4b9d27dd85419a93a0a540e2d7a8138",
"assets/assets/icons/api.png": "f318ea2432a7a556854226adb2a541ea",
"assets/assets/icons/riverpod.png": "dedb613e3f33a885a89f4c7ab71b89eb",
"assets/assets/icons/getx.jpeg": "8b45f74808bad7269d07405dd8716c45",
"assets/assets/icons/dart.png": "c98564dd2693eb6952368ea2f96d34ba",
"assets/assets/icons/word.png": "d313b934754b66affdb564ca8c46b253",
"assets/assets/icons/icon-app.svg": "e1f2cf2a9ab0b7574fba3d4b3aacedc3",
"assets/assets/icons/icon-backend.svg": "b55f9408e6fa05e8079e6f60e5deccee",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
