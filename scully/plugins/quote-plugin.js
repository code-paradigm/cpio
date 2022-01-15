"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotePlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.quotePlugin = 'quotePlugin';
async function quoteFunctionPlugin(dom, route) {
    console.log(route);
    let document = dom.window.document;
    let blockquotes = document.querySelectorAll("blockquote");
    if (blockquotes.length === 0)
        return dom;
    var iconList = {
        tip: '<i class="fas fa-lightbulb"></i>',
        note: '<i class="fas fa-clipboard-list"></i>',
        quote: '<i class="fas fa-quote-left"></i>',
        know: '<i class="fab fa-korvue"></i>',
    };
    for (var i = 0; i < blockquotes.length; i++) {
        let text = blockquotes[i].innerHTML;
        let icon = text.match(/{([a-z]+)}\s/);
        var iconName;
        if (icon == null) {
            iconName = 'note';
        }
        else {
            iconName = icon[1];
        }
        let iconHtml = iconList.hasOwnProperty(iconName) ? iconList[iconName] : iconList['note'];
        text = text.replace('{' + iconName + '} ', '');
        blockquotes[i].innerHTML = `
      <span class="icon">
        ${iconHtml}
      </span>
      ${text}
    `;
    }
    console.log('quote');
    return dom;
}
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByDom', exports.quotePlugin, quoteFunctionPlugin, validator);
//# sourceMappingURL=quote-plugin.js.map