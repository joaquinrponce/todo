!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"create",(function(){return u})),n.d(o,"fromJSON",(function(){return c}));const l=function(e){let t=e.target;var n;n=t.dataset.index,s.removeToDo(n),p(s),r(s)},a=function(e,t){let n=document.getElementById("list-display"),o=document.createElement("div"),a=document.createElement("span"),r=document.createElement("span"),i=document.createElement("button");o.classList.add("todo"),o.id=e.date,o.textContent=e.title,a.textContent=e.date,a.classList.add("date"),i.setAttribute("data-index",t),i.setAttribute("type","button"),i.textContent="X",i.addEventListener("click",l),i.classList.add("yeetButton"),r.appendChild(i),o.appendChild(a),o.appendChild(r),n.appendChild(o)},r=function(e){!function(){let e=document.getElementById("list-display");null!=e&&e.parentNode.removeChild(e)}();let t=document.getElementById("container-main"),n=document.createElement("div"),o=document.createElement("div");n.classList.add("container"),n.classList.add("list"),n.id="list-display",o.textContent=e.name,o.classList.add("title"),n.appendChild(o),t.appendChild(n),i(e.getToDos())},i=function(e){for(let t=0;t<e.length;t++)null!==e[t]&&a(e[t],t)},d={getToDos(){return this.toDos},addToDo(e,t){let n=((e,t,n,o=!1)=>({date:e,title:t,category:n,done:o}))(e,t,this.name);this.toDos.push(n),i([n])},removeToDo(e){this.toDos[e]=null}},u=e=>{let t={name:e,toDos:[]},n=Object.assign(Object.create(d),t);return r(n),n},c=e=>Object.assign(Object.create(d),JSON.parse(e));let s=g("Default")?g("Default"):u("Default"),m=JSON.parse(localStorage.getItem("ListNames"))||[],f=function(){let e=[];return m.forEach(t=>e.push(g(t))),e}();function p(e){m.includes(e.name)||m.push(e.name),localStorage.setItem("ListNames",JSON.stringify(m)),localStorage.setItem(e.name,JSON.stringify(e))}function g(e){let t=localStorage.getItem(e);return null!==o&&c(t)}let y=document.getElementById("showLists");function v(e){var t;t=g(e.target.textContent),s=t,console.log(s.name),r(s)}document.getElementById("newListButton").addEventListener("click",(function(){let e=document.getElementById("newListTitle").value,t=u(e);return p(t),s=t,t})),document.getElementById("newToDoButton").addEventListener("click",(function(){let e=document.getElementById("newToDoDate").value,t=document.getElementById("newToDoTitle").value;s.addToDo(e,t),p(s)})),r(s),f.forEach(e=>{let t=document.createElement("li");t.innerHTML=`<a href='#'>${e.name}</a>`,t.addEventListener("click",v),y.appendChild(t)})}]);