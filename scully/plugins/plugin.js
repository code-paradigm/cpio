"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerPlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.headerPlugin = 'headerPlugin';
async function headerFunctionPlugin(dom, route) {
    console.log('Route Data : ', route);
    let document = dom.window.document;
    document.getElementById('article-header').innerHTML = `
  
  <h1 style="font-weight: 500;"> ${route.data.title} </h1>
  <h3 style="line-height: 1.5;"> ${route.data.description} </h3>

  <span> ${route.data.author} </span>
  
  <br>
  
  <div style="display: flex; gap: 0.4rem; align-items: center;">
    <span class="mat-caption"> ${route.data.date} </span>
    • <span class="mat-caption"> ${route.data.duration} </span>
  </div>
  
  `;
    console.log('Document : ', document.querySelector('body').outerHTML);
    return dom;
}
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByDom', exports.headerPlugin, headerFunctionPlugin, validator);
//# sourceMappingURL=plugin.js.map