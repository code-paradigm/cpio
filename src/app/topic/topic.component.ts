import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cpio-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  hover = new Array(20).fill(false);
 
  @Input() topics;

  constructor() { }

  ngOnInit(): void { }

  changeStyle(i) {
    this.hover[i] = !this.hover[i];
  }
}