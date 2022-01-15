"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setnumPlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.setnumPlugin = 'setnumPlugin';
async function setnumFunctionPlugin(dom, route) {
    let document = dom.window.document;
    let pre = document.querySelectorAll('pre');
    if (pre.length === 0)
        return dom;
    for (var i = 0; i < pre.length; i++) {
        pre[i].classList.add("line-numbers");
        console.log(pre[i].outerHTML);
    }
    return dom;
}
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByDom', exports.setnumPlugin, setnumFunctionPlugin, validator);
//# sourceMappingURL=setnum-plugin.js.map