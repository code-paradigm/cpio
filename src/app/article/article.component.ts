import { Component, OnInit, ViewEncapsulation, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightService } from '../shared/highlight.service';
import { CpioRoutesService } from '../shared/cpio-routes.service';

@Component({
  selector: 'cpio-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class ArticleComponent implements OnInit, AfterViewChecked {

  relatedArticles$;

  constructor(
    private router: Router,
    private highlightService: HighlightService,
    private cpioRoutes: CpioRoutesService
  ) { }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  getRelatedArticles(url: string) {
    this.router.navigate([url]);
    this.relatedArticles$ = this.cpioRoutes.getRelatedArticles(url, 5);
  }

  ngOnInit(): void { 
    this.getRelatedArticles(this.router.url);
  }
}
