(()=>{"use strict";var e={7210:(e,t,r)=>{var n=r(8880),o=r(6712),a=r(3673);function i(e,t,r,n,o,i){const c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(c)}const c=(0,a.aZ)({name:"App"});var s=r(4260);const l=(0,s.Z)(c,[["render",i]]),p=l;var u=r(7792),d=r(9582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(173)]).then(r.bind(r,8173)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(971)]).then(r.bind(r,971))},{path:"/review",component:()=>r.e(546).then(r.bind(r,8546))},{path:"/posts",component:()=>r.e(556).then(r.bind(r,2556))},{path:"/agree",component:()=>r.e(580).then(r.bind(r,4580))},{path:"/contact",component:()=>r.e(655).then(r.bind(r,6655))},{path:"/probl",component:()=>r.e(352).then(r.bind(r,7352))},{path:"/signin",component:()=>Promise.all([r.e(736),r.e(435)]).then(r.bind(r,2435))},{path:"/register",component:()=>Promise.all([r.e(736),r.e(562)]).then(r.bind(r,1562))},{path:"/mypay",component:()=>Promise.all([r.e(736),r.e(123)]).then(r.bind(r,123))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(286)]).then(r.bind(r,7286))}],f=h,m=(0,u.BC)((function(){const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/test_quasar/dist/spa/")});return t}));async function v(e,t){const r="function"===typeof m?await m({}):m,n=e(p);return n.use(o.Z,t),{app:n,router:r}}const b={config:{}};let g="function"===typeof p.preFetch?p.preFetch:void 0!==p.__c&&"function"===typeof p.__c.preFetch&&p.__c.preFetch;function y(e,t){const r=e?e.matched?e:t.resolve(e).route:t.currentRoute;return r?Array.prototype.concat.apply([],r.matched.map((e=>Object.keys(e.components).map((t=>{const r=e.components[t];return{path:e.path,c:r}}))))):[]}function w(e,t){e.beforeResolve(((r,n,o)=>{const a=window.location.href.replace(window.location.origin,""),i=y(r,e),c=y(n,e);let s=!1;const l=i.filter(((e,t)=>s||(s=!c[t]||c[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==g&&(l.unshift(g),g=!1),0===l.length)return o();let p=!1;const u=e=>{p=!0,o(e)},d=()=>{!1===p&&o()};l.reduce(((e,o)=>e.then((()=>!1===p&&o({currentRoute:r,previousRoute:n,redirect:u,urlPath:a,publicPath:t})))),Promise.resolve()).then(d).catch((e=>{console.error(e),d()}))}))}const _="/test_quasar/dist/spa/",P=/\/\//,O=e=>(_+e).replace(P,"/");async function k({app:e,router:t},r){let n=!1;const o=e=>{try{return O(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},a=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t)},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===n&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:_})}catch(c){return c&&c.url?void a(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),w(t),e.mount("#q-app"))}v(n.ri,b).then((e=>Promise.all([Promise.resolve().then(r.bind(r,7))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,r)}))))},7:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i,axios:()=>o.a,api:()=>a});var n=r(52),o=r.n(n);const a=o().create({baseURL:"https://api.example.com"}),i=({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=a}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,o,a]=e[p],c=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{123:"b0f8c0a0",173:"573051be",286:"51a24f64",352:"17bd749b",435:"a260d992",546:"f8d2b5f6",556:"660381f1",562:"943069f4",580:"98210ffb",655:"a55510b4",971:"47e784c0"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",173:"aade734b",736:"fde95fe4",971:"9f7e5e52"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-app:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var u=l[p];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){c=u;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+a),c.src=n),e[n]=[o];var d=(t,r)=>{c.onerror=c.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/test_quasar/dist/spa/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),c=r.p+i;if(t(i,c))return o();e(n,c,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={173:1,971:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),c=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var p=s(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},n=self["webpackChunkquasar_app"]=self["webpackChunkquasar_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(7210)));n=r.O(n)})();