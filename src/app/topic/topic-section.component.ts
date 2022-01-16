import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'cpio-topic-section',
  templateUrl: './topic-section.component.html',
  styleUrls: ['./topic-section.component.scss']
})
export class TopicSectionComponent implements OnInit {

  disableNgNext: boolean = false;
  disableNgPrev: boolean = true;

  @Input() title;
  @Input() topics;
  @Input() topicName;

  constructor() { }

  ngOnInit(): void { }

  @ViewChild('scrollMe', { read: ElementRef }) public scrollMe: ElementRef<any>;

  public onPrevClick(): void {
    this.scrollMe.nativeElement.scrollTo({ left: (this.scrollMe.nativeElement.scrollLeft - 350), behavior: 'smooth' });
    setTimeout(() => {
      this.disableNgPrev = this.scrollMe.nativeElement.scrollLeft <= 350;
      this.disableNgNext = false;
    }, 200);
  }

  public onNextClick(): void {
    this.scrollMe.nativeElement.scrollTo({ left: (this.scrollMe.nativeElement.scrollLeft + 350), behavior: 'smooth' });
    setTimeout(() => {
      this.disableNgPrev = false;
      this.disableNgNext = this.scrollMe.nativeElement.scrollLeft + this.scrollMe.nativeElement.clientWidth >= this.scrollMe.nativeElement.scrollWidth - 350;

    }, 200);
  }
}