var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequire4b17;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire4b17=r),r("2fMSh"),r("3vTQW"),r("74Aiq"),r("brr8Z"),r("kgHXB");var n=r("2shzp");const o=document.querySelector(".popular-recipes");!async function(){try{const e=(await n.default.get("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).data;let t="";e.forEach((e=>{t+=`<div class="article-poprecipes">\n        <img\n          src="${e.preview}"\n          alt="${e.title}"\n        />\n        <div class="article-poprecipes-content">\n          <div class="article-poprecipes-title">${e.title}</div>\n          <div class="article-poprecipes-text">${e.description}</div>\n        </div>\n      </div>`})),o.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e.message)}}();
//# sourceMappingURL=favorites-page.3e341fda.js.map