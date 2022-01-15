import { ScullyConfig } from '@scullyio/scully';
import { headerPlugin }  from './scully/plugins/header-plugin'; 
import { quotePlugin }  from './scully/plugins/quote-plugin'; 
import { setnumPlugin }  from './scully/plugins/setnum-plugin'; 
import { codefilePlugin }  from './scully/plugins/codefile-plugin'; 
import { footerPlugin }  from './scully/plugins/footer-plugin'; 

import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "cpio",
  outDir: './dist/static',
  extraRoutes: 'topic/:id',
  routes: {
    '/articles/:title': {
      type: 'contentFolder',
      postRenderers: [ quotePlugin, headerPlugin, setnumPlugin, codefilePlugin, footerPlugin ],
      title: {
        folder: "./mdarticles"
      }
    },
  },
};