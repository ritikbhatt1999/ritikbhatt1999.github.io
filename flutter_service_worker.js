'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6eed2cc53140d7a0cfeed2f95ce7bc5a",
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
".git/config": "58d1230cc2dde9aa767a3771f3782e74",
".git/objects/0d/bcbf578ddc0198bb62831ef292d726890dc105": "eaf4df9739ee6e72957a97b796436cfb",
".git/objects/0c/ed70316bb070aa0dc6e48278568a17e936ce60": "a8b7155a4499c15397c0815b28dc378e",
".git/objects/0c/1b9d1a1550dfbf63865b43d24746affe3f62db": "324a80cd46767a76a41e3aedee175dd8",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/32/f84fd8857f831852a79087c706f54183ba486c": "20f8abd726c1662a0e455e493d025213",
".git/objects/56/54e9d985ac6278a8fd1a8cbbcb4ce331abbaeb": "26800a091d8d38a41ee07e91dcdfaacf",
".git/objects/51/d03ff32c31cddb53b1ebfbbdeefdc00f79dfb1": "e8b8267e56af84871753b19895ae9e7f",
".git/objects/67/b01b361ddc0a7912c03fcd19078039ba12b121": "64137c4bd36baa8bcd8351440294b6f2",
".git/objects/b5/8870f0988291b6f533fc4e45071203a4bc807c": "415e4928a501276dc690bcf50199334f",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/643ea9e6327afe85db4dc0d66cfe8159a7e651": "3cc5c0e5c690f91ddf2f383ef1c22ec8",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/d6/e5adf5c70ea7c95e48f91b67b05799db602240": "49bf3ee72a43300b2ae80a90d67d88ed",
".git/objects/d6/18fb4c9f8cf38963100a38832b5bb03bf22b6c": "b1fe50e09af576a0da658eb5330123ea",
".git/objects/e5/d7f1e938347a4ffefcb0164aa6ca9ef59fe53e": "5bbea34e4da914d3ccb25bc36c014299",
".git/objects/f3/a335d6afcf13017b407bd6396a64ad60197dfe": "4e43ce849417602d49f3dbf301509684",
".git/objects/f3/e4d9c76c072ec77dca22c492373f179ac637b4": "4594f393bbbf5db343909a6e08ad3622",
".git/objects/c0/d829830cfd183012e433bf3e71c1f0e4b5e7c5": "174ee80faa1237401e35dfe07346e356",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/1e62990b478d6fa3d90d89630186102c5ec560": "3b1a2cc0f13547cd2ddfc1298235fecc",
".git/objects/e3/1a3b4048cb8ce60e8de577279c34fef6c92e35": "5678227f7fd27296f2399482adf13371",
".git/objects/fe/fe0d7db6b96938fccc34667be57023a8888fce": "fa057da0833aec46847be3ee470b030a",
".git/objects/fe/381c04be600100e58b292d12de70d2ac1fe865": "eb7429499aac505bc68b64ec34cb3cbc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/7fcf94d8ac3379396e5e83bc1be2caa0a530b1": "73d1fbd3f1b2ea094a33ebde28c724f3",
".git/objects/18/c35330a2297cc3cbae559dd6ea40e655d24fc4": "520489ba45201ce262ebe1292700ed63",
".git/objects/16/75d0b4bdd88b677d4180322b0890fd98235d79": "e363d626789050f06262dc5b61fdcc03",
".git/objects/89/8aa9093e57ca4a9acc2cc4811e7294e86f0c33": "b4766f5981ed51bfe4ef52bdd0316fd6",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/7b/fb46046135007308e167a67c69ace1c4799a46": "efdc4a1310828a9344761ff919736d56",
".git/objects/2f/01d7e3cc65d57c0e68276b2265a3b4b4f34400": "066d735f618e9122bcf7819e51cda96a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/d4bc5d935c29494b5e274e2727a6bef7d189e4": "662dc0eaaec607f2a8329d8142232eb6",
".git/objects/36/17fabcfb77781790086d045db5ada0571253e4": "41b58a2eaf38bdbb6f343a7ab7239f7b",
".git/objects/91/2a9de9c9878cc9ef8437390d77cf84bff1b903": "53734a0379687aee63ac599f9ce3a749",
".git/objects/62/b9b4c11dba5b8925d76116be4712d80216a505": "d31869a0b40dc77f945454abf84f58b0",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/53/4362f90dacd4792f57ad71b560e156e28f40c0": "c6bdf097fc333d1e31e3b17ce4b95bed",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/5a83a11e0aabfda42b1106df3f6b29e9328dfb": "b257d93bbd30412b93e3cca9a5767ad0",
".git/objects/90/90657a14f701b1328278765a9a0cbb8deb3561": "617737e35ba8e7a8101bd07bbacaf1b8",
".git/objects/bf/61a2b6d1d3907c815bc63cdbe1e8ae608f8129": "58565b24c75304270ea9af21528ee1c5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/dfbb32d6e60431296b4cdd21945afa8b34a4be": "d93c7fed22a0443713c69eb5316294b6",
".git/objects/a0/f26f0bfe080653de05f195f618f9aa17d5142f": "3e701ce4fe74fdad7070b94b6c07f62c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/58ec902372fd68bdef89eac7206b43d549d183": "28ca2fb892bf1e6a2dd9677502d03992",
".git/objects/db/9d1f5e780a3e4bc1e7c24a8afc6fb683d252c9": "0ab8f3c32565b521aee3250092497d12",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ea/72c79f3889972769dee6f2c57f81a2955b8008": "2561e8490a53dc763ca80249c5728659",
".git/objects/cd/ca7adbbaff6e35ee16f8936b5b2af2f16a4ff9": "066fabb7e9aa9b62cab5e2cf30be1d70",
".git/objects/f7/ba2557392b6d0d6bc133a7c5129b57e414f1ca": "ca7b477a43c2d705191d43c9f7f11892",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/4abab4acf7d36f375316972b34a132d566d736": "7cd34e4d3f4006e82eb3f77e8ce04d15",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/6a2475e6d5722fb07326ab1954a15d01adab0a": "3c8b1665aed995e21edcabc9116b03a4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/1e/edc2fab978d261fece59980a5babe2ddfbfef4": "95bb99f4a69e9b3bddf577499945bc2f",
".git/objects/8d/eeaff7c3b2f222db84c259eac64a46de3b1985": "6c1232b0dc08a7112f09d346bd289f12",
".git/objects/85/286093af1a7c92cbfa9fcae5433ff65f4c6fec": "149dc4bd0eaf9351ac411d619381bf35",
".git/objects/71/fd55b922248dd7049aebc5742d944c7e6d4a17": "8a9475f24ffa95f618039c354b86503b",
".git/objects/8e/cf7830e811950878dabded457ec97908c47b59": "e9e93e8d92cc2de3bb342c236f9b4a66",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03b0e0c2016d872ad319518d08c2d047",
".git/logs/refs/heads/main": "35e09cb5826f637f7393ab497c399833",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "451c892aabb1dcd8eb24b28d3eee14d0",
".git/index": "0869b494f6a28aaf05c1b38b8b233d63",
".git/COMMIT_EDITMSG": "2e4ead3a807b8a118e7af6493b0b1e57",
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
