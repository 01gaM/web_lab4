!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";async function o(e){let t=await fetch(e);if(!t.ok)return console.log("ERROR: Request returned error"),null;return(await t.json()).effect_entries[0].effect}n.r(t);const r=document.getElementById("app");function i(){r.innerHTML='<div><div><img src = "src/cat.png" alt = "Cat image"/></div><div><span><span style="font-weight: bold">Name: </span>Olga Molchanova<br></span><span><span style="font-weight: bold">group: </span>M3308<br></span>\n        <span><span style="font-weight: bold">ability: </span>Uber DDoS\'er</span></div></div>'}document.getElementById("homeTab").onclick=i,document.getElementById("pokemonTab").onclick=function(){(async function(e){let t=await fetch("https://pokeapi.co/api/v2/pokemon/"+e);if(!t.ok)return console.log("ERROR: Request returned error"),null;const n=await t.json();let r=`<div><div><img src = "https://pokeres.bastionbot.org/images/pokemon/${n.id}.png" alt = "Pokemon image" style="width:300px;height:300px"/></div>`;r+=`<div><span><span style="font-weight: bold">Name: </span>${e}<br></span>`;for(let e=0;e<n.abilities.length;e++){let t=n.abilities[e].ability,i=o(t.url);r+=`<span><span style="font-weight: bold">${t.name}: </span>${await i}<br></span>`}return r+="</div></div>",r})("rattata").then(e=>r.innerHTML=e)},i()}]);