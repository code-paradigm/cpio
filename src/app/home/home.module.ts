


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopicComponent } from '../topic/topic.component';
import { TopicPageComponent } from '../topic/topic-page.component';
import { TopicSectionComponent } from '../topic/topic-section.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    TopicComponent,
    TopicPageComponent,
    TopicSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  exports: [
    TopicComponent
  ]
})
export class HomeModule { }





