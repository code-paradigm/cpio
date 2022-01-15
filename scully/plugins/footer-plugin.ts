import { registerPlugin, HandledRoute } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const footerPlugin = 'footerPlugin';

async function footerFunctionPlugin(dom: JSDOM, route: HandledRoute): Promise<JSDOM> {
  let document = dom.window.document;

  let tagsHtml = '';
  route.data.tags.forEach( function (tag) {
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

registerPlugin('postProcessByDom', footerPlugin, footerFunctionPlugin, validator);
