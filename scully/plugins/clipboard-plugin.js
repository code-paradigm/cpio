"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clipboardPlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.clipboardPlugin = 'clipboardPlugin';
async function clipboardFunctionPlugin(dom, route) {
    console.log('clipboard');
    let document = dom.window.document;
    // let clipboard = document.querySelectorAll(".copy-to-clipboard-button");
    let clipboard = document.querySelector('body');
    console.log(clipboard.innerHTML);
    // if (clipboard.length === 0) return dom;
    // for (var i = 0; i < clipboard.length; i++) {
    //   clipboard[i].innerHTML = `
    //     <span class="mat-body-1"><i class="fas fa-clone"></i></span>
    //   `
    // }
    return dom;
}
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByDom', exports.clipboardPlugin, clipboardFunctionPlugin, validator);
//# sourceMappingURL=clipboard-plugin.js.map