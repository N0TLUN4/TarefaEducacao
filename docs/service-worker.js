importScripts("/assets/js/workbox-v5.1.4/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.4"});

self.__precacheManifest = [{"url":"/assets/css/prism.css","revision":"f996ac7d30bd5e3d45812be1222f45d3"},{"url":"/assets/css/theme.css","revision":"00d386c96629e8e5cfbebd8f1461c235"},{"url":"/assets/css/theme.css.map","revision":"e24ece0147996a02aebe8d2b33398a43"},{"url":"/assets/js/form.js","revision":"e3d6d112f46e9b41846c2093cd47a526"},{"url":"/assets/js/jquery.min.js","revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{"url":"/assets/js/lazyload.js","revision":"8dffb45dc6a0d1befff5298da03acbfa"},{"url":"/assets/js/lunr.js","revision":"07ee3b3e9e4a47a20a35fe6a94b11046"},{"url":"/assets/js/lunrsearchengine.js","revision":"dec107b456ee624497414dddc402902b"},{"url":"/assets/js/prism.js","revision":"69cc8bab93e758aff5386a2c9265a871"},{"url":"/assets/js/sw-register.js","revision":"b949b1c1d4589a63885e8c6cec70510f"},{"url":"/assets/js/theme.js","revision":"ae1c3bc9d0a4367a78d9bdf70a814867"},{"url":"/manifest.json","revision":"f7f37ecd582f2302491c2d95d99d6bac"},{"url":"/service-worker.js","revision":"b8a8f38f5e5650a583997bbce2a8d069"},{"url":"/assets/fonts/casper-icons.svg","revision":"240264149a475160ef8115aeda3cbafd"},{"url":"/assets/images/posts/ArrozDeFornoDeCalabresa.webp","revision":"8190271411df1ac3fa84d29089a3390b"},{"url":"/assets/images/posts/BeliscaoDeGoiabada.webp","revision":"f67c06a10949298b0681a043be555cb4"},{"url":"/assets/images/posts/BiscoitosAmanteigados.webp","revision":"b53768a796799801de5a7c7845acbfd6"},{"url":"/assets/images/posts/BoloDeCenouraComChocolate.webp","revision":"4d501aab6b1b9551b28aa3fa6f9c1e8a"},{"url":"/assets/images/posts/BoloDeChocolate.webp","revision":"48a218f3730515f6f7b4ef9785333283"},{"url":"/assets/images/posts/BoloDeCoco.webp","revision":"4b7109f2ee3a29a9ea935cb0811dd4de"},{"url":"/assets/images/posts/BoloDeFuba.webp","revision":"4c9b342f8a7e16ea38fd374cd43f6e5d"},{"url":"/assets/images/posts/BoloDeLaranja.webp","revision":"789ecae3b5a1ac75eeddbdf91e6d0c00"},{"url":"/assets/images/posts/BoloPaoDeQueijo.webp","revision":"e9433fec975b45b23c4edde29be22820"},{"url":"/assets/images/posts/BoloSimples.webp","revision":"b86e8097bcbbba74949a2d853f291085"},{"url":"/assets/images/posts/Brownie.webp","revision":"f4f3469ed75615d224434f5bd4598023"},{"url":"/assets/images/posts/Cajuzinho.webp","revision":"e248e86a6252f2fa26e0db30ff0b73a0"},{"url":"/assets/images/posts/CookieDeChocolate.webp","revision":"bca28702d4e5c87613c3c412e5b9d3ed"},{"url":"/assets/images/posts/Coxinha.webp","revision":"ed1c23bbbc88f3369e5aee006278166b"},{"url":"/assets/images/posts/MacarraoAlhoEOlho.webp","revision":"35af9e4c11d1da81ace62eafce4e6ae9"},{"url":"/assets/images/posts/MacarraoDeForno.webp","revision":"c54928a3320a7d7895041d6cd6bdf4a7"},{"url":"/assets/images/posts/PaoDeQueijo.webp","revision":"d500b0034d78f26769af8cf4ff8ab0ef"},{"url":"/assets/images/posts/Pastel.webp","revision":"85c04f0f7aec2b01b060222b3f880eab"},{"url":"/assets/images/posts/PudimDeTapioca.webp","revision":"7700dd3e983093d645bef7d6decf6aed"},{"url":"/assets/images/posts/PudimDeVinho.webp","revision":"ab54d3552787454bb2df920140ea2711"},{"url":"/assets/images/posts/PureDeBatata.webp","revision":"630bdcd66c071bf9c8f8e7c0bdc1e61d"},{"url":"/assets/images/posts/TortaDeHamburguer.webp","revision":"499f1467c023526f9676bc17e0f39129"},{"url":"/assets/images/static/about.webp","revision":"1693d07c5082775e19f308925fb6ad8d"},{"url":"/assets/images/static/authors/luana.webp","revision":"959c7a8ad72df9e80871ed67ac1f5060"},{"url":"/assets/images/static/favicon.ico","revision":"328b4f5d01c5c7f14036355e37d8c3de"},{"url":"/assets/images/static/logo.png","revision":"34f7567d11a425902716bae813096124"},{"url":"/assets/images/static/pwa/144.png","revision":"f83b6ce5cba16c9f32469e864c7e908d"},{"url":"/assets/images/static/pwa/192.png","revision":"c7276387c673e13b062d07108ef79633"},{"url":"/assets/images/static/pwa/512.png","revision":"e58a34f153d0d4ae4dc6e6a20f37ee2b"},{"url":"/assets/images/static/pwa/96.png","revision":"a3ae16335ef7c24f85b00e6881615d1b"},{"url":"/404.html","revision":"bf04034cb82c1b61e62589257b949aac"},{"url":"/about.html","revision":"ea0f52eb449cbef67b066b3c6e14aaf0"},{"url":"/author.html","revision":"cdef1cd42c81ba31b32ca8c1833b5eab"},{"url":"/categories.html","revision":"7061bd644fe33bb210caa99b31343f5f"},{"url":"/contact-sucess/index.html","revision":"edff917125a80697e28b20e6207fd620"},{"url":"/contact.html","revision":"4c9d91089e88e79032bbae43690487d5"},{"url":"/google25008c19ca68a028.html","revision":"22e63471663425605aef3c361ba7a6d8"},{"url":"/index.html","revision":"6af77254f399955b3fc1e4f45b605477"},{"url":"/tags.html","revision":"7bbe67f37e4980077e03dd1dc07174c0"}];

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
