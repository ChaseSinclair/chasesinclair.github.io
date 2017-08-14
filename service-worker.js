"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/simply-you/index.html","4fc011f1bc22caad3b739917925cc91a"],["/simply-you/static/css/main.25af5517.css","3f1a0dae26ada7ab69040681a588378e"],["/simply-you/static/js/main.4e73b58e.js","cd6675a62270be562447bfd7a5e117ac"],["/simply-you/static/media/banner_with_logo.5f8358ca.png","5f8358ca6c9aa2abe975aa1070c8c3bc"],["/simply-you/static/media/bookshelf.4cc221e4.png","4cc221e41664eb658277fa2077a745f9"],["/simply-you/static/media/decor_icon.ca6b563c.png","ca6b563c38db23ebfd78f63a173543c0"],["/simply-you/static/media/furniture.a3e12379.jpg","a3e123795c9f30d973bfd27db851fc65"],["/simply-you/static/media/furniture2.299595e6.jpg","299595e6e216631c8bb5f40f8b1bbea2"],["/simply-you/static/media/glitter_swirls.785015ff.png","785015ff55b97946518e7506394c3667"],["/simply-you/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/simply-you/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/simply-you/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/simply-you/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/simply-you/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/simply-you/static/media/lamp.39af6262.png","39af62624a857bf907797ad45d629b20"],["/simply-you/static/media/mirror.3ebcf13f.png","3ebcf13fb65516e3cd981e2a8526649c"],["/simply-you/static/media/table.bab0bf78.jpg","bab0bf78dbea4de3f7ca076101c4fcc6"],["/simply-you/static/media/welcome-to-our-home.d65a70c8.jpg","d65a70c8295543b490eda004eca76bb7"],["/simply-you/static/media/wine_glass.607d4e41.jpg","607d4e41efbadf557935699b27ac15a6"],["/simply-you/static/media/woman1.f300037f.png","f300037f5cb0644f5f62396fe3599599"],["/simply-you/static/media/woman2.6181201c.png","6181201cef002f4c73d6a433d162ee94"],["/simply-you/static/media/woman3.a61d8122.png","a61d812226cf90c896aa318e08879ec2"],["/simply-you/static/media/woman4.2885857a.png","2885857a6dbc8ad386b924d4d73f2b24"],["/simply-you/static/media/woman5.791aeae0.png","791aeae069d9bd3b7816d7f671dea251"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),s=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/simply-you/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});