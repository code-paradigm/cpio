import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialTagsService {

  constructor(private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService,
    private meta: Meta) { }

    readonly tagDescription: string = 'A blog about programming and software development, writing about JavaScript, DotNet, Python, Angular, DevOps, Docker and Kubernetes';
    readonly tagImage: string = 'assets/logo-light.jpg';
    readonly urlPrefix: string = 'https://codingparadigm-io.github.io';
    readonly siteName: string = 'CodingParadigm';
    // readonly userTwitter: string = '@s0l0c0ding';

    setTitleAndTags() {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary')
      ).subscribe(() => {
        this.scully.getCurrent().subscribe(
          link => {
            this.meta.updateTag({ name: 'twitter:url', content: this.urlPrefix + this.router.url });
            this.meta.updateTag({ name: 'og:url', content: this.urlPrefix + this.router.url });
            this.meta.updateTag({ name: 'og:site_name', property: 'og:site_name', content: this.siteName});
            // this.meta.updateTag({ name: 'twitter:creator', content: this.userTwitter});
            // this.meta.updateTag({ name: 'twitter:site', content: this.userTwitter});
            if (link?.title) {
              console.log('first social');
              this.titleService.setTitle(link.title);
              this.meta.updateTag({ name: 'description', content: link?.description });
              this.meta.updateTag({ name: 'image', content: this.urlPrefix+'/'+link?.photo });
              this.meta.updateTag({ name: 'image', content: 'https://unsplash.com/photos/iar-afB0QQw' });
              this.meta.updateTag({ name: 'og:title', property: 'og:title', content: link?.title });
              this.meta.updateTag({ name: 'og:description', property: 'og:description', content: link?.description});
              this.meta.updateTag({ name: 'og:type', property: 'og:type', content: 'article' });
              this.meta.updateTag({ name: 'article:section', property: 'article:section', content: (link?.tags as string[])[0] });
              this.meta.updateTag({ name: 'og:image', content: this.urlPrefix+'/'+link?.photo });
              this.meta.updateTag({ name: 'og:image', content: 'https://unsplash.com/photos/iar-afB0QQw' });
              this.meta.updateTag({ name: 'twitter:title', content: link?.title.substring(0, 69) });
              this.meta.updateTag({ name: 'twitter:description', content: (link?.description as string).substring(0, 123)});
              this.meta.updateTag({ name: 'twitter:image', content: this.urlPrefix+'/'+link?.photo });
              this.meta.updateTag({ name: 'twitter:image', content: 'https://unsplash.com/photos/iar-afB0QQw' });
            } else {
              console.log('second social');
              this.titleService.setTitle(this.data.title);
              const description = this.data.desc ? this.data.desc : this.tagDescription;
              this.meta.updateTag({ name: 'description', content: description });
              this.meta.updateTag({ name: 'image', content: this.urlPrefix+'/'+this.tagImage });
              this.meta.updateTag({ name: 'og:title', content: this.data.title });
              this.meta.updateTag({ name: 'og:description', content: description });
              this.meta.updateTag({ name: 'og:type', content: 'website' });
              this.meta.updateTag({ name: 'og:image', content: this.urlPrefix+'/'+this.tagImage });
              this.meta.updateTag({ name: 'twitter:title', content: this.data.title });
              this.meta.updateTag({ name: 'twitter:description', content: description.substring(0, 123) });
              this.meta.updateTag({ name: 'twitter:image', content: this.urlPrefix+'/'+this.tagImage });
            }
          });
      });
    }
  
    private get data() { return this.activatedRoute.snapshot.firstChild.data; }
}
