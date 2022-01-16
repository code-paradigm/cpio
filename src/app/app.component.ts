import { Component, Inject, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SocialTagsService } from './shared/social-tags.service';
import { MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { faLinkedin, faGithub, faYoutube, faGitAlt, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { faPython, faRust, faAngular, faReact, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'cpio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sheetRef;
  topicName = {};
  title: string = 'cpio';
  toggleDarkMode: boolean = false;

  screen = {
    mobile: false,
    tablet: false,
    laptop: false
  }

  constructor(private observer: BreakpointObserver, 
    private _bottomSheet: MatBottomSheet,
    private tagsService: SocialTagsService) {
      
    this.tagsService.setTitleAndTags();
    this.screen.mobile = this.observer.isMatched('(max-width: 499px)');
    this.screen.tablet = this.observer.isMatched('(min-width: 500px)') && this.observer.isMatched('(max-width: 800px)');
    this.screen.laptop = this.observer.isMatched('(min-width: 801px)');
  }

  ngOnInit() { }

  bottomSheetConfig: MatBottomSheetConfig = {
    data: this.toggleDarkMode
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent, { data: this.toggleDarkMode });
  }

  openLink(event: MouseEvent): void {
    this._bottomSheet.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'cpio-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  faPython = faPython;
  faRust = faRust;
  faAngular = faAngular;
  faReact = faReact;
  faJs = faJs;
  faHtml5 = faHtml5;
  faCss3 = faCss3;

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGitAlt = faGitAlt;
  faGitSquare = faGitSquare;
  faYoutube = faYoutube;

  data: boolean;

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public input: any) {
    this.data = input;
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
