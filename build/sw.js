var serviceWorkerOption = {"assets":["./static/js/main.12736cd5.js","./static/css/main.ce13eb36.css","./index.html"]};
        
        !function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="/",n(0)}([function(t,n){"use strict";function e(t){return t.json().then(function(t){var n={Trains:[],updateTime:new Date};t.Trains.forEach(function(t){return n.Trains.push({DestinationCode:t.DestinationCode,Min:t.Min})});var e=new Response(JSON.stringify(n),{headers:{"content-type":"application/json"}});return new Promise(function(t){return t(e)})})}function o(t){return t.json().then(function(t){var n={StationToStationInfos:[]};t.StationToStationInfos.forEach(function(t){return n.StationToStationInfos.push({CompositeMiles:t.CompositeMiles,RailTime:t.RailTime})});var e=new Response(JSON.stringify(n),{headers:{"content-type":"application/json"}});return new Promise(function(t){return t(e)})})}var i="wmata",s="6b700f7ea9db408e9745c207da7ca827",r="https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=J03&ToStationCode=G05&api_key="+s,a="https://upload.wikimedia.org/wikipedia/commons/3/37/WMATA_system_map.svg",c="https://fonts.googleapis.com/css?family=Roboto",u="https://api.wmata.com/StationPrediction.svc/json/GetPrediction/",f="https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo";self.addEventListener("install",function(t){t.waitUntil(caches.open(i).then(function(t){return t.addAll(["/",r,a,c].concat(self.serviceWorkerOption.assets))}))}),self.addEventListener("fetch",function(t){t.request.url.startsWith(u)&&caches.open(i).then(function(n){n.match(t.request).then(function(o){return o?(fetch(t.request).then(e).then(function(e){n.put(t.request,e)}),o):fetch(t.request).then(e).then(function(e){return n.put(t.request,e.clone()),e})})}),t.request.url.startsWith(f)&&caches.open(i).then(function(n){n.match(t.request).then(function(e){return e?e:fetch(t.request).then(o).then(function(e){return n.put(t.request,e.clone()),e})})}),t.respondWith(caches.match(t.request).then(function(n){return n||fetch(t.request)}))})}]);
//# sourceMappingURL=sw.js.map