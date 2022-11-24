importScripts("/assets/js/workbox-v5.1.4/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.4"});

self.__precacheManifest = [{"url":"/assets/css/prism.css","revision":"f996ac7d30bd5e3d45812be1222f45d3"},{"url":"/assets/css/theme.css","revision":"392d9990de4606764e4088904e9fee08"},{"url":"/assets/css/theme.css.map","revision":"078c73633accd359bd1a85a7784ae26a"},{"url":"/assets/js/form.js","revision":"e3d6d112f46e9b41846c2093cd47a526"},{"url":"/assets/js/jquery.min.js","revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{"url":"/assets/js/lazyload.js","revision":"8dffb45dc6a0d1befff5298da03acbfa"},{"url":"/assets/js/lunr.js","revision":"07ee3b3e9e4a47a20a35fe6a94b11046"},{"url":"/assets/js/lunrsearchengine.js","revision":"541aa3697e4a10459c1cd5ef7b367843"},{"url":"/assets/js/prism.js","revision":"69cc8bab93e758aff5386a2c9265a871"},{"url":"/assets/js/sw-register.js","revision":"b949b1c1d4589a63885e8c6cec70510f"},{"url":"/assets/js/theme.js","revision":"ae1c3bc9d0a4367a78d9bdf70a814867"},{"url":"/manifest.json","revision":"09bb9dcd322674d0902cf0a886bf3849"},{"url":"/service-worker.js","revision":"b8a8f38f5e5650a583997bbce2a8d069"},{"url":"/assets/fonts/casper-icons.svg","revision":"240264149a475160ef8115aeda3cbafd"},{"url":"/assets/images/posts/ArrozDeFornoDeCalabresa.webp","revision":"8190271411df1ac3fa84d29089a3390b"},{"url":"/assets/images/posts/BeliscaoDeGoiabada.webp","revision":"f67c06a10949298b0681a043be555cb4"},{"url":"/assets/images/posts/BiscoitosAmanteigados.webp","revision":"b53768a796799801de5a7c7845acbfd6"},{"url":"/assets/images/posts/BoloDeCenouraComChocolate.webp","revision":"4d501aab6b1b9551b28aa3fa6f9c1e8a"},{"url":"/assets/images/posts/BoloDeChocolate.webp","revision":"48a218f3730515f6f7b4ef9785333283"},{"url":"/assets/images/posts/BoloDeCoco.webp","revision":"4b7109f2ee3a29a9ea935cb0811dd4de"},{"url":"/assets/images/posts/BoloDeFuba.webp","revision":"4c9b342f8a7e16ea38fd374cd43f6e5d"},{"url":"/assets/images/posts/BoloDeLaranja.webp","revision":"789ecae3b5a1ac75eeddbdf91e6d0c00"},{"url":"/assets/images/posts/BoloPaoDeQueijo.webp","revision":"e9433fec975b45b23c4edde29be22820"},{"url":"/assets/images/posts/BoloSimples.webp","revision":"b86e8097bcbbba74949a2d853f291085"},{"url":"/assets/images/posts/Brownie.webp","revision":"f4f3469ed75615d224434f5bd4598023"},{"url":"/assets/images/posts/Cajuzinho.webp","revision":"e248e86a6252f2fa26e0db30ff0b73a0"},{"url":"/assets/images/posts/CookieDeChocolate.webp","revision":"bca28702d4e5c87613c3c412e5b9d3ed"},{"url":"/assets/images/posts/Coxinha.webp","revision":"ed1c23bbbc88f3369e5aee006278166b"},{"url":"/assets/images/posts/MacarraoAlhoEOlho.webp","revision":"35af9e4c11d1da81ace62eafce4e6ae9"},{"url":"/assets/images/posts/MacarraoDeForno.webp","revision":"c54928a3320a7d7895041d6cd6bdf4a7"},{"url":"/assets/images/posts/PaoDeQueijo.webp","revision":"d500b0034d78f26769af8cf4ff8ab0ef"},{"url":"/assets/images/posts/Pastel.webp","revision":"85c04f0f7aec2b01b060222b3f880eab"},{"url":"/assets/images/posts/PudimDeTapioca.webp","revision":"7700dd3e983093d645bef7d6decf6aed"},{"url":"/assets/images/posts/PudimDeVinho.webp","revision":"ab54d3552787454bb2df920140ea2711"},{"url":"/assets/images/posts/PureDeBatata.webp","revision":"630bdcd66c071bf9c8f8e7c0bdc1e61d"},{"url":"/assets/images/posts/TortaDeHamburguer.webp","revision":"499f1467c023526f9676bc17e0f39129"},{"url":"/assets/images/static/about.webp","revision":"1693d07c5082775e19f308925fb6ad8d"},{"url":"/assets/images/static/authors/luana.webp","revision":"959c7a8ad72df9e80871ed67ac1f5060"},{"url":"/assets/images/static/favicon.ico","revision":"328b4f5d01c5c7f14036355e37d8c3de"},{"url":"/assets/images/static/logo.png","revision":"34f7567d11a425902716bae813096124"},{"url":"/assets/images/static/pwa/144.png","revision":"f83b6ce5cba16c9f32469e864c7e908d"},{"url":"/assets/images/static/pwa/192.png","revision":"c7276387c673e13b062d07108ef79633"},{"url":"/assets/images/static/pwa/512.png","revision":"e58a34f153d0d4ae4dc6e6a20f37ee2b"},{"url":"/assets/images/static/pwa/96.png","revision":"a3ae16335ef7c24f85b00e6881615d1b"},{"url":"/404.html","revision":"37b2ef320fcdf84acdae637ee39ae059"},{"url":"/about.html","revision":"4df0bbdbaa40e13a0fa41e86ce1738d7"},{"url":"/author.html","revision":"0922e38548fd9aa4cb02168a9b347360"},{"url":"/categories.html","revision":"734b27b87a088f8e867d4b83a5aa2cc6"},{"url":"/contact-sucess/index.html","revision":"579cd3e0a03d4b353f3878a8c048a968"},{"url":"/contact.html","revision":"6d8fe9f0c13ad34d037c9ff19639d75a"},{"url":"/google25008c19ca68a028.html","revision":"22e63471663425605aef3c361ba7a6d8"},{"url":"/index.html","revision":"4436d2ac58b7b93891e84298be312304"},{"url":"/tags.html","revision":"3798772a7a728b021f7984959a2b6b4e"}];

// service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'tarefaedu',
    suffix: 'v1.0',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use `NetworkFirst` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.NetworkFirst()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    new workbox.strategies.StaleWhileRevalidate()
);

// use `StaleWhileRevalidate` third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    new workbox.strategies.StaleWhileRevalidate()
);
