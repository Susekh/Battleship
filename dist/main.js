(()=>{"use strict";var e={277:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);"]),a.push([e.id,"*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody, html{\n    height: 100;\n    width: 100;\n}\n\n\n#container{\n    padding: 3rem;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n}\n\n#gamesboard-container{\n    width: 100;\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 10rem;\n    padding-right: 10rem;\n    justify-content: space-between;\n}\n\n\n.game-board{\n    width: 25rem;\n    height: 25rem;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n#game-info{\n    display: flex;\n    justify-content: space-around;\n    padding: 1rem;\n}\n\n\n.block{\n    width: 2.5rem;\n    height: 2.5rem;\n    box-sizing: border-box;\n}\n\n.block:hover{\n    background-color: grey;\n}\n\n\n.option-container{\n    margin-left: 10rem;\n    width: 25rem;\n    height: 5rem;\n    padding: 1rem;\n    margin-top: 3rem;\n    background-color: #fef08a;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n.destroyer{\n    background-color: brown;\n}\n\n\n\n.destroyer-preview{\n    width: 2rem;\n    height: 1rem;\n    margin: 0.3rem;\n}\n\n.submarine{\n    background-color: green;\n}\n\n.cruiser{\n    background-color: purple;\n}\n\n.battleship{\n    background-color: orange;\n}\n\n.carrier{\n    background-color: blue;\n}\n\n.submarine-preview{\n    width: 3rem;\n    height: 1rem;\n    margin: 0.3rem;\n}\n\n.cruiser-preview{\n    width: 3rem;\n    height: 1rem;\n    margin: 0.3rem;\n}\n\n.battleship-preview{\n    width: 4rem;\n    height: 1rem;\n    margin: 0.3rem;\n}\n\n\n.carrier-preview{\n\n    width: 5rem;\n    height: 1rem;\n    margin: 0.3rem;\n\n}\n\n\n#computer .destroyer,\n#computer .submarine,\n#computer .cruiser,\n#computer .battleship,\n#computer .carrier{\n    background-color: #e879f9;\n}\n\n\n.hover{\n    background-color: grey;\n}\n\n.boom{\n    background-color: red !important;\n}\n\n\n.empty{\n    background-color: grey !important;\n}\n\n\n#option-switch-parentDiv{\n    display: flex;\n    gap: 2rem;\n}\n\n\n\n.switch-div {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 3rem;\n    margin-top: 3.5rem;\n}\n\n.switch-div > button{\n    cursor: pointer;\n    padding: 0.8rem;\n    background-color: #0ea5e9;\n    color: white;\n    border-style: none;\n    border-radius: 5px;\n}\n\n.switch-div > button:hover{\n    background-color: #0369a1;\n    transition: ease-in 300ms;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{class e{constructor(e,n,t,r,o){this.name=e,this.length=n,this.hits=t,this.isSunk=r,this.isHorizontal=o}hit(e){this.hits+=e}Sunk(){this.isSunk=this.hits===this.length}}const n=[new e("destroyer",2,0,!1,!0),new e("submarine",3,0,!1,!0),new e("cruiser",3,0,!1,!0),new e("battleship",4,0,!1,!0),new e("carrier",5,0,!1,!0)];function r(e,n,t){document.getElementById(`${e}`).classList.add(`${n}`,`${t}`)}function o(e,n,t){const r=document.createElement("div");r.classList.add("game-board"),r.style.backgroundColor=e,r.id=n;for(let e=0;e<100;e+=1){const n=document.createElement("div");n.id=`${e}`,n.classList.add("block"),r.append(n)}t.append(r)}var i=t(379),a=t.n(i),c=t(795),s=t.n(c),d=t(569),l=t.n(d),u=t(565),p=t.n(u),m=t(216),h=t.n(m),f=t(589),g=t.n(f),v=t(277),y={};y.styleTagTransform=g(),y.setAttributes=p(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=h(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,function(){const e=document.getElementById("container"),t=document.createElement("div");t.id="game-info";const i=document.createElement("div");i.id="turn-display";const a=document.createElement("h2");a.appendChild(document.createTextNode("Turn : ")),i.appendChild(a);const c=document.createElement("div");c.id="turn-display-update",i.appendChild(c);const s=document.createElement("div");s.id="info-display";const d=document.createElement("h2");d.appendChild(document.createTextNode("Info : ")),s.appendChild(d);const l=document.createElement("span");l.id="info-display-update",s.appendChild(l),t.append(i,s);const u=document.createElement("div");u.id="gamesboard-container";const p=document.createElement("div");p.classList.add("option-container"),function(e,n){const t=[];for(let e=0;e<5;e+=1)t[e]=document.createElement("div"),t[e].id=`${e}`,t[e].setAttribute("draggable",!0),n.appendChild(t[e])}(0,p);const m=document.createElement("div");m.classList.add("switch-div");const h=document.createElement("button");h.id="flip-button",h.innerText="FLIP";const f=document.createElement("button");f.id="start-button",f.innerText="START",m.append(h,f);const g=document.createElement("div");g.id="option-switch-parentDiv",g.append(p,m),e.append(t,u,g),r("0","destroyer-preview","destroyer"),r("1","submarine-preview","submarine"),r("2","cruiser-preview","cruiser"),r("3","battleship-preview","battleship"),r("4","carrier-preview","carrier"),o("#fef08a","player",u),o("#f5d0fe","enemy",u);const v=(()=>{const e=document.querySelector(".option-container"),t=10;let r,o,i=0;function a(e,n,r,o){let i;i=n?r<=t*t-o.length?r:t*t-o.length:r<=t*t-t*o.length?r:r-o.length*t+t;const a=[];for(let r=0;r<o.length;r+=1)n?a.push(e[Number(i)+r]):a.push(e[Number(i)+r*t]);let c;n?c=+a[0].id%t<=t-o.length:a.every(((e,n)=>function(e){c=+a[0].id<t*e+1+90}(n)));const s=a.every((e=>!e.classList.contains("taken")));return{shipBlocks:a,valid:c,notTaken:s}}function c(e,n,o){const s=document.querySelectorAll(`#${e} div`),d=Math.random()>=.5?1:0,l="player"===e?0===i:d,u=Math.floor(Math.random()*t*t),p=o||u,{shipBlocks:m,valid:h,notTaken:f}=a(s,l,p,n);return h&&f?m.forEach((e=>{e.classList.add(n.name),e.classList.add("taken")})):("enemy"===e&&c(e,n,o),"player"===e&&(r=!0)),{valid:h,notTaken:f}}function s(e){r=!1,o=e.target}function d(e){e.preventDefault();const t=n[o.id];!function(e,n){const t=document.querySelectorAll("#player div"),r=0===i,{shipBlocks:o,valid:c,notTaken:s}=a(t,r,e,n);c&&s&&o.forEach((e=>{e.classList.add("hover"),setTimeout((()=>{e.classList.remove("hover")}),300)}))}(e.target.id,t)}function l(e){const t=e.target.id;c("player",n[o.id],t),r||o.remove()}return Array.from(e.children).forEach((e=>e.addEventListener("dragstart",s))),document.querySelectorAll("#player div").forEach((e=>{e.addEventListener("dragover",d),e.addEventListener("drop",l)})),{flip:function(){const n=Array.from(e.children);i=0===i?90:0,n.forEach((e=>function(e){e.style.transform=`rotate(${i}deg)`}(e)))},addShipPiece:c}})();h.addEventListener("click",v.flip),n.forEach((e=>v.addShipPiece("enemy",e)))}(),function(){const e=10,n=document.getElementById("turn-display-update"),t=document.getElementById("info-display-update"),r=document.querySelector(".option-container"),o=document.getElementById("start-button");let i;const a=!1,c=[],s=[];function d(e){if(!a){if(e.target.classList.contains("taken")){e.target.classList.add("boom"),t.textContent="you hit the enemy's ship!";let n=Array.from(e.target.classList);n=n.filter((e=>"block"!==e)),n=n.filter((e=>"boom"!==e)),n=n.filter((e=>"taken"!==e)),c.push(...n)}else t.textContent="You hit enemy's waters.",e.target.classList.add("empty");i=!1,setTimeout(l,2e3)}}function l(){a||(n.textContent="Computers Go!",t.textContent="The computer is thinking...",setTimeout((()=>{const n=Math.floor(Math.random()*e*e),r=document.querySelectorAll("#player div");if(r[n].classList.contains("taken")&&r[n].classList.contains("boom"))l();else if(r[n].classList.contains("empty"))l();else if(r[n].classList.contains("taken")&&!r[n].classList.contains("boom")){r[n].classList.add("boom"),t.textContent="The computer hit your ship!";let e=Array.from(r[n].classList);e=e.filter((e=>"block"!==e)),e=e.filter((e=>"boom"!==e)),e=e.filter((e=>"taken"!==e)),s.push(...e)}else t.textContent="Computer hit nothing this time.",r[n].classList.add("empty")}),1e3),setTimeout((()=>{i=!0,n.textContent="Your Turn!",t.textContent="Please take your go.",Array.from(document.querySelectorAll("#enemy div")).forEach((e=>e.addEventListener("click",d)))}),2500))}o.addEventListener("click",(function(){void 0===i&&(0===r.children.length?t.innerText="Place all your ships first":(document.querySelectorAll("#enemy div").forEach((e=>{e.addEventListener("click",d)})),i=!0,n.innerText="Your Turn!",t.innerText="The game has started"))}))}()})()})();