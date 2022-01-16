import { Component, OnInit } from '@angular/core';
import { CpioRoutesService } from '../shared/cpio-routes.service';

@Component({
  selector: 'cpio-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  topics$ = {};
  topicName = {};

  constructor(private cpioRoutes: CpioRoutesService) { }

  ngOnInit() {
    this.topics$ = this.cpioRoutes.getRoutes();
    this.topicName = this.cpioRoutes.getTopicName();
  }

}
