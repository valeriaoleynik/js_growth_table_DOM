function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function r(r){return function(r){if(Array.isArray(r))return e(r)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(r,t){if(r){if("string"==typeof r)return e(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t=document.querySelector(".append-column"),n=document.querySelector(".remove-column"),o=document.querySelector(".append-row"),l=document.querySelector(".remove-row");t.addEventListener("click",function(){var e=document.querySelector(".field").querySelector("tbody");r(e.rows).forEach(function(e){e.insertCell(-1)}),n.disabled=!1,10===e.querySelector("tr").children.length&&(t.disabled=!0)}),n.addEventListener("click",function(){var e=document.querySelector(".field").querySelector("tbody");r(e.rows).forEach(function(e){return e.deleteCell(-1)}),t.disabled=!1,2===e.querySelector("tr").children.length&&(n.disabled=!0)}),o.addEventListener("click",function(){for(var e=document.querySelector(".field").querySelector("tbody"),r=e.querySelector("tr").children.length,t=document.createElement("tr"),n=1;n<=r;n++){var c=document.createElement("td");t.appendChild(c)}e.append(t),l.disabled=!1,10===e.rows.length&&(o.disabled=!0)}),l.addEventListener("click",function(){var e=document.querySelector(".field").querySelector("tbody");e.deleteRow(-1),o.disabled=!1,2===e.rows.length&&(l.disabled=!0)});
//# sourceMappingURL=index.1d5c4a0f.js.map
