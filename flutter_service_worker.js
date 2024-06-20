'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3b2fccabf46ea842a55ef43d113f1501",
".git/config": "1785b37d0b7dfdbfb717c577713a6b5a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "94397e79302b0a738980f33929940af5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cd7db451970f68bfb0c52cdd4347745c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "826105f894b1e078d2e772dd2174e815",
".git/logs/refs/heads/main": "5a2689e534f17c77ca47e8a4a694efaf",
".git/logs/refs/remotes/origin/main": "5ed1c15eb6eee9bb285cd1593870ed19",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/f86edc354940898936d69896bced3013e1f2fa": "194c95f938c2880b48dce6665a08ed8e",
".git/objects/0c/da0540193274d215f9e0ce9e354fb841e1458f": "c43e94c5de28e47bf72955a4bf5fe908",
".git/objects/0f/dd6e998a3c3ae744c03757be42d668d7dae65e": "908158f0ef8ee3db4b9d017642733696",
".git/objects/10/ceb9c26211a1d01f5e544ef40acb9aa17be6e9": "1a340599e96eb1ed439c2c1569637f05",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/2859c1ee9079a6d925f2e57944cd35049ff0fb": "584857d0e9a41deef4896adc0514dc5a",
".git/objects/1b/942822666fb89fec2e5a606557a437fc947f86": "28668696e276701fb6f079a302808f88",
".git/objects/1d/285f67bbd90750d70236e5703e911a2d8bb7bc": "b166a8ee4cbe1d096e1f8b1f7b05333e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/26b1f2d9c6564d029dc24df4e7c7b0e7860aeb": "414c13cc20ea788de4970dcdd4506179",
".git/objects/23/3bbece43e9d0f6f7768c559f08abaab8b799f8": "e9ab21c5d69f716c652165d67e6f3e0a",
".git/objects/25/5223ce1237c0ed0b13f806ec536c6d5459d96d": "3c1f397e199c0cdb6b64e88097d3930f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/31/cd6257f4561e188df2985dc20cbed5f0b429db": "122bd8b827778d5a92d5cbc6a3c2c7ac",
".git/objects/35/488b27f2466e3bb708f6b8dd6ccf3b9c5607c6": "eb3352c348d6166ae4270d3b9e6aaf31",
".git/objects/3a/a4cc13532616f1b606ec267c80da7444ede32f": "2ab8a5bad0ae2b7adbea12a41d78ea2d",
".git/objects/41/09b14317d86efe8fe0664eb6b401e4ddf05254": "f59801f90b592029ac2a08b71d270a40",
".git/objects/45/61923933fec8837de6051e78efd44109a8784b": "35eaa402b333ebdac7b12f8a67a847dc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/6f78c10d63711f13eae1aa111b3fc7152cdbc9": "911068514f8d8c35b2fafdeadad98cac",
".git/objects/53/1febb51d0fc6790e984a8062fa87e8ac610dda": "19705105f7a56d2ed6fb3fc25730f622",
".git/objects/56/2523a07b7ed6b87ffb307f5799065c2210b5ab": "5e595a4877c9205f90a3d414b8a7266f",
".git/objects/58/85199643c38b12b08e3c23c5f44ba6c4eba06b": "a5e3ba6dff975f13eba7ef58d4b287c0",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/3f8eb1b6b0887f989cf289d002ad3f181f53f0": "8147b624baf240d312afd998db310783",
".git/objects/5e/1de25db4ea6250496152162a01d63f95ea9f7a": "0e6bb6a902eb2ec3e2d09ca1534d4d34",
".git/objects/5e/cb479c3877108d05bf72d70f31670cca6a2bb7": "a5fc9e660751d0603c85a1114d0d010f",
".git/objects/5f/27247abf2638467459b50adda9ad787ee6061b": "d26ee79dcb1598a4a66ab921a444fc8b",
".git/objects/5f/fa7394b671c795e5f30ac5665d39b77056d749": "eeaed52c6a4d96e16ef35522bf01b601",
".git/objects/60/a59b3a0d17b1af2e0cd9f3ce52e56d2882cee1": "c5afbcdc12dfc5176cb444106b52f305",
".git/objects/61/b8acd5ec1ce92f2ff5c5ce266cb5b471d426b3": "a0d943e0ecd52f252378dfbf475ed33d",
".git/objects/64/c4adbb6a3f4d0ee1a36c060c9d6f33790578e0": "6dd702f0b41e10f302a9632fe8c94292",
".git/objects/68/14b15f2c00c60a24c80f888bdda2e3c914ff3c": "c35a525a925c1c729bab61fadf363137",
".git/objects/6c/866f5718414b0204aa0b95ba4e6fb58bd80408": "0b9492ff1e49554fb94d958ea5e06e96",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/6f66ecf0f8f0d2dae75749e657436695a5ce44": "28ccde411cdc5da3727fd5e642bcccfb",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/6110295ce0c4e91143a225369ae6271b8fdcf8": "b3ace83bc7182cc14331ad8722cdd3c6",
".git/objects/73/32dea7c38dcf8cff24c1e1ab54364244d634fe": "1df4712218f6c5754ff992cb2e529717",
".git/objects/73/a36cf6d31825b3254ff8bbeef887fb8d8c6700": "9564bce594abbd006505b48f4db3200c",
".git/objects/76/174856984d7025166aefc5a7968547649e2216": "4d1ed177e80a626d42c9e39ee3cab2b4",
".git/objects/76/81911f9e34cc09fe75326c2b2b99e095aa73f9": "a3cbddba0efd192e1f0484b2307c2875",
".git/objects/78/dd7e9f9b2649b629b09e1fb5a0fb29f6d3ca84": "eea531115ad348d0b0e80558d7409b1f",
".git/objects/7b/64cb29d7c4e900608337c05624a72d05864ada": "b00f4dd8b40c6fa2265448d6a1b23d26",
".git/objects/7b/a1e36d34e2c4331686d8e58e42574eb3ce8301": "1bc15c1c631423f8fba0fdf4c43c79a2",
".git/objects/7c/feb67bea1d624c5ffea5c43cf7c08286f7e391": "452785ca9b20615dc18a42f2208f745d",
".git/objects/7e/68603862977e9f587adc3f6150a49ad34b4c82": "1cde6cbbf924c5b03cffe356c7e3a8e3",
".git/objects/84/9548b9fc7decfb65493494e87e00b03ac64044": "ddab469bf54dc93bed3f858d1481303d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/b76d6fff781325c9210b2b0105f32e31301de0": "c1172325592433c9cf577581fd58b59b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d53e194aab1a3321a3b218e30bb2dd58b4ac9c": "2fc549198fd5d81ea24008553e308317",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/5cc7a4f39a1ada63ce3172cece4ac9d6b97d1b": "0ca21943750c4b8600a688b09ba7ccc1",
".git/objects/97/d02540f18cc6b0ca81a3500b94c73bdc5884b8": "7671795e5b6c53afdf11afd634a83c58",
".git/objects/9a/7f4bbf70eb6710220b6e5cc6fa18ab9affeadd": "e123467f1503cdd266b7772ccf10eb60",
".git/objects/9e/4ff851c604e81ab833f10e68c77f7babe3fdad": "df824667580ef9dffd0387af6fdd1da4",
".git/objects/a0/f2a4db98602cd23dcf166e1ea4208db7859c6f": "62eca9ebece3efffbc9d7255f4a95029",
".git/objects/a2/801702befa446568289b40c430dc2b320d0c86": "07d917fa1878645d7dcf89632772af32",
".git/objects/a4/53d05c04156a08ffdf5b330a08f058c7518b11": "52bd194dfac68b77ae65484286c5a95b",
".git/objects/a4/845adc2abc1ca5d0bc28b589e9e5fea8797d9c": "aca8874aa30caf874aae254f6612e222",
".git/objects/a6/1494e0d7902cc412b1442107c2f6b7a69b9d81": "ae9ba3a8cb2fd35c777d313310b16fd1",
".git/objects/a7/a0633e15b89a99c7f55a0d5a363ae044ad2241": "4a7788af6b305ab0c923745bf66916c7",
".git/objects/a8/bc1bd7807efe427fecf1915ba23eafa27d428b": "08c1ab0e4da5f355e1c75851055d0d46",
".git/objects/af/13443ab506341fc563cbd64ab987261048b34b": "61cf2f2454042071948dcccb30c01f39",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/42c001c360c7a1cd9c93dc43e50042dcf52a4e": "bed55367d1dacca6243d83ad57b3445d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e50ea39b1178157f50cb6b1ce1728806f7773d": "e9bf510bf2ead95a9082d857cec901e0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/e00bc0031513fd9fd563a0d9867a5ffe878934": "b31a87e2d2c251fedfb970a60911f1ca",
".git/objects/be/12cb0a30082ca56b96121fe9062ed6a6f74d7f": "ff8b620ea67f8ca227957d30039fdfb5",
".git/objects/c3/2c642a301703c4bc70d46ef310a38202451695": "ee9f2f8ed6fdefb3f5bcb67c84a65ae8",
".git/objects/c5/3b4a8e862baaf9c9d9edb1d37737b399b0eb12": "57b3d263197db5412b16253a2f0b6e65",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d0/e22f1ef7c9cba1ff6fe0a377ea3cf766b31417": "ad382d9a773d0d066277ea3eae1f0c05",
".git/objects/d1/86a5b715dd644e9bc73d2c813663a3a608295e": "5187c6f802857805d2315bd26ecc77a3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/07c0d73f937030e04f29e042d7ed6e2ad0fae2": "e1754b85de40410e427797bb07d5a900",
".git/objects/de/951105b6651f928dfa03849bde8a7bd8de0c47": "618d9f8d81506d938656d2ad8602a726",
".git/objects/df/731ad85609af6e6900ffae26d86d3de6cb4511": "7c94e790c6f58c4d850084a72d8170dd",
".git/objects/e4/6dab352b96347ef2aa2041b9956699d8907974": "7adb50b5fccdc6a2d14cf099ebc9ed50",
".git/objects/e5/3c85e787f132d49275c0f5678c845206802c1e": "9a6ff686c45b1a711d33f4b38250aead",
".git/objects/e6/905bc3a0ad52821afcd68e5e3f2d819a791176": "3ffa1e8c2aa384e3c4848f2b42391d87",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/0c93ea8d77d82efbc7b991e070819bc5674f0e": "2b390ae5e673cee001f72fe9460db1c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7c989a712e7c627b7773cb81562a616fa1c3e8": "dcb42cf3b39fa631b7dd8eab5875ee69",
".git/objects/ef/8e3afec46b415ee515edc4685f52895b8e9cb4": "af9ead1b9c2a3384a73cfd441f9c1ae9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1083631861640f02d95b59a37de0e8dd981a4f": "426835f7ab716ffaabfdc33ba76e234e",
".git/objects/f5/bdb636a0e7a01da07e11bd6a713819cdfcb6a6": "736ee975605a0a8f4238afd7a571b046",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f9/66de63f2a4dbb75030471f6bdb6a2a3556955a": "98e83202d822304429020ebaea645a60",
".git/objects/fa/45412e9f476a9bcb36f9d970835ad3e48e03be": "77464461018a59a20efb1687aaf24ced",
".git/objects/fc/22b0a87aca62aefb82ffd6662eb2fcc57179fb": "98efe958682369674a817a30e947cd7e",
".git/objects/fc/731815a7a666ccbdfb510893eaf6af9af94d1d": "6c0eab61d6ad27d6cc5f4aae9720f7d6",
".git/objects/ff/2c61c181883c21d5bf2342b54cc0a18c5616d9": "964131129eeb2334ff0129a64c768111",
".git/ORIG_HEAD": "c5d566f235ef42d33ca357948f07762d",
".git/refs/heads/main": "bf2e07ee89edb39ab944f67822a25d1e",
".git/refs/remotes/origin/main": "bf2e07ee89edb39ab944f67822a25d1e",
"assets/AssetManifest.bin": "78cc77d8db7e6e5ef1951ed07175b901",
"assets/AssetManifest.bin.json": "6982becb9a202ae17c7c1f1d51345fb2",
"assets/AssetManifest.json": "d9ad32fcdff5d3d27b118a9d46ffe3da",
"assets/assets/images/go.jpg": "dffa08216c8248d2d529b04e64c88769",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "61a160b0cf9f4b3cd16e1d3a94be1e0b",
"assets/NOTICES": "c4632b75d7bbd6241bed7862925831be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "cc1d45414d043976fa5985bb4bed5046",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "2c12f3caf238798ec4444b5828a2c604",
"icons/Icon-512.png": "3847528ab1fe23223b189006113e5787",
"icons/Icon-maskable-192.png": "2c12f3caf238798ec4444b5828a2c604",
"icons/Icon-maskable-512.png": "3847528ab1fe23223b189006113e5787",
"index.html": "8528aaca031d3d63db5272333e9aa49b",
"/": "8528aaca031d3d63db5272333e9aa49b",
"main.dart.js": "8e03b8dab6b136e49133d0dd034cee70",
"manifest.json": "4555d7e0424423116d01e752c8e96029",
"version.json": "e22a0f9a6da483a1e81251414ab91038"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
