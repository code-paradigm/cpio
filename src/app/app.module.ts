import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, BottomSheetComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent, ContactDialog } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
// import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BottomSheetComponent,
    ContactDialog,
    AboutComponent,
    // TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScullyLibModule,
    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
