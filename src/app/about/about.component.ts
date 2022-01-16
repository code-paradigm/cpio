import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";

import { faCode, faTh, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

import {
  AnimationType,
  scaleIn,
  scaleOut,
  // fadeIn,
  // fadeOut,
} from "./carousel.animations";

@Component({
  selector: 'cpio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger("slideAnimation", [
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),
    ]
    )
  ]
})
export class AboutComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faYoutube = faYoutube;

  faMicrophone = faMicrophone
  faCode = faCode
  faTh = faTh

  currentSlide: number;
  projects = []
  animationType: AnimationType;

  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.projects.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.projects.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit(): void {
    this.currentSlide = 0;
    this.animationType = AnimationType.Scale;

    this.projects = [
      {
        'title': 'E-commerce for Shoe Seller',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium necessitatibus repellendus voluptas, delectus ipsam temporibus architecto reiciendis?'
      },
      {
        'title': 'Food Delivery App',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quod vitae tempore fuga error magnam hic temporibus voluptas quasi! Facilis, veniam totam?'
      },
      {
        'title': 'Accounts App for Retail',
        'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam laborum ex fuga expedita maxime reprehenderit in veniam harum!'
      },
      {
        'title': 'Appointment App for Clinic',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in autem sed, blanditiis architecto corporis?'
      },
    ]
  }

  disableNgNext: boolean = false;
  disableNgPrev: boolean = true;

  @ViewChild('scrollMe', { read: ElementRef }) public scrollMe: ElementRef<any>;

  public onPrevTest(): void {
    this.scrollMe.nativeElement.scrollTo({ left: (this.scrollMe.nativeElement.scrollLeft - 350), behavior: 'smooth' });
    setTimeout(() => {
      this.disableNgPrev = this.scrollMe.nativeElement.scrollLeft <= 350;
      this.disableNgNext = false;
    }, 200);
  }

  public onNextTest(): void {
    this.scrollMe.nativeElement.scrollTo({ left: (this.scrollMe.nativeElement.scrollLeft + 350), behavior: 'smooth' });
    setTimeout(() => {
      this.disableNgPrev = false;
      this.disableNgNext = this.scrollMe.nativeElement.scrollLeft + this.scrollMe.nativeElement.clientWidth >= this.scrollMe.nativeElement.scrollWidth - 350;

    }, 200);
  }
}
