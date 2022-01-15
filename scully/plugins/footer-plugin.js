"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footerPlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.footerPlugin = 'footerPlugin';
async function footerFunctionPlugin(dom, route) {
    let document = dom.window.document;
    let tagsHtml = '';
    route.data.tags.forEach(function (tag) {
        tagsHtml += '<span class="mat-caption tag">' + tag + '</span>';
    });
    document.getElementById('article-footer').innerHTML = `
    <br>
    <div class="tags">
      <span>
        <i class="fas fa-tags"></i> tags: 
      </span>
      ${tagsHtml}
    </div>
  `;
    return dom;
}
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByDom', exports.footerPlugin, footerFunctionPlugin, validator);
//# sourceMappingURL=footer-plugin.js.map