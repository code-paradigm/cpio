import { registerPlugin, getPluginConfig, HandledRoute } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const setnumPlugin = 'setnumPlugin';

async function setnumFunctionPlugin(dom: JSDOM, route: HandledRoute): Promise<JSDOM> {
  let document = dom.window.document;
  let pre = document.querySelectorAll('pre');
  
  if (pre.length === 0) return dom;

  for (var i = 0; i < pre.length; i++) {
    pre[i].classList.add("line-numbers");
    console.log(pre[i].outerHTML);
  }

  return dom;
}

const validator = async () => [];

registerPlugin('postProcessByDom', setnumPlugin, setnumFunctionPlugin, validator);
