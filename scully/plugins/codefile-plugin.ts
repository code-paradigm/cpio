import { registerPlugin, getPluginConfig, HandledRoute } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const codefilePlugin = 'codefilePlugin';

async function codefileFunctionPlugin(dom: JSDOM, route: HandledRoute): Promise<JSDOM> {
  let document = dom.window.document;
  let codefile = document.querySelectorAll("h3");

  if (codefile.length === 0) return dom;

  var iconList = {
    terminal: '<i class="fas fa-terminal"></i>',
    javascript: '<i class="fab fa-js-square"></i>',
    typescript: '<i class="fab fa-js-square"></i>',
    python: '<i class="fab fa-python"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    rust: '<i class="fab fa-rust"></i>',
    scss: '<i class="fab fa-sass"></i>',
  };

  for (var i = 0; i < codefile.length; i++) {
    let text = codefile[i].innerHTML;
    let icon = text.match(/{([a-z]+)}\s/);

    var iconName;
    if (icon == null) {
      iconName = 'terminal';
    } else {
      iconName = icon[1];
    }

    let iconHtml = iconList.hasOwnProperty(iconName) ? iconList[iconName] : iconList['terminal'];
    text = text.replace('{' + iconName + '} ', '');
    
    codefile[i].innerHTML = `            
      ${iconHtml}
      <span>${text}</span>      
    `
  }
  
  // console.log('codefile');
  return dom;
}

const validator = async () => [];

registerPlugin('postProcessByDom', codefilePlugin, codefileFunctionPlugin, validator);
