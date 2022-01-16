import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-regular-svg-icons';

export interface DialogData {
  toggleDarkMode: boolean;
}

@Component({
  selector: 'cpio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faYoutube = faYoutube;

  @Input() screen: any;
  @Input() toggleDarkMode: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {

    const minWidth = this.screen.laptop ? '600px' : '90%' ;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = minWidth;
    dialogConfig.position = {
      'top': '50px'
    };
    dialogConfig.data = {
      toggleDarkMode: this.toggleDarkMode
    };

    const dialogRef = this.dialog.open(ContactDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(FormData => {
      // Logic to store the messages goes here 
      // and the var formData has all the info
      console.log('The dialog was closed');
      console.log(FormData);
    });
  }

}

@Component({
  templateUrl: './contact-dialog.html',
  styleUrls: ['./contact-dialog.scss']
})
export class ContactDialog implements OnInit {

  contactForm: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<ContactDialog>,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {

    console.log('message from dialog')
    console.log(this.data)

    this.contactForm = this._fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
