import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CpioRoutesService } from '../shared/cpio-routes.service';

@Component({
  selector: 'cpio-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss']
})
export class TopicPageComponent implements OnInit {

  topics = [];
  topics$ = {};
  title: string;
  topicName = {};

  constructor(private route: ActivatedRoute,
    private cpioRoutes: CpioRoutesService) { }

  ngOnInit(): void { 
    this.topicName = this.cpioRoutes.getTopicName();
    this.title = this.route.snapshot.paramMap.get('id');
    this.topics$ = this.cpioRoutes.getRoutes();
    this.topics = this.topics$[this.title];
  }

}