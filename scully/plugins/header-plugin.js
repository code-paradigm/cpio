"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerPlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.headerPlugin = 'headerPlugin';
async function headerFunctionPlugin(dom, route) {
    let document = dom.window.document;
    let authorImage = '../' + route.data.authorImage;
    let subheadings = document.querySelectorAll("h2");
    let articleImage;
    if (route.data.photo) {
        articleImage = route.data.photo;
    }
    else {
        articleImage = '../../assets/image1.jpg';
    }
    let tagsHtml = '';
    route.data.tags.forEach(function (tag) {
        tagsHtml += '<span class="mat-caption tag">' + tag + '</span>';
    });
    let list = '';
    subheadings.forEach(function (subheading, i) {
        list += '<li id="' + i + '" onClick="scrollMeIn(this.id)">' + subheading.innerHTML + '</li>';
    });
    list = '<ul>' + list + '</ul>';
    document.getElementById('article-header').innerHTML = `    
    <img class="article-img" src="${articleImage}"/>

    <h1 style="font-weight: 500;"> ${route.data.title} </h1>
    <span class="mat-body-1">${route.data.description}</span>
    <br><br>

    <div style="display: flex; gap: 1rem; align-items: center;">

      <img src="${authorImage}" alt="authorImage"
      style="height: 40px; width: 40px; border-radius: 50%; object-fit: cover;">
      
      <div>
        <span> ${route.data.author} </span>
        <br>
        <div style="display: flex; gap: 0.4rem; align-items: center;">
          <span class="mat-caption"> ${route.data.date} </span>
          • 
          <span class="mat-caption"> ${route.data.duration} </span>
        </div>
      </div>

    </div>

    <br>
    <div class="box table-contents table-top">
      <span class="mat-subheading-2">
        <i class="fas fa-list"></i> &nbsp;&nbsp;
        Table of Contents
      </span>

      ${list}
    </div>
    
  `;
    return dom;
}
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByDom', exports.headerPlugin, headerFunctionPlugin, validator);
//# sourceMappingURL=header-plugin.js.map