import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
// import { TopicPageComponent } from '../topic/topic-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '/topic', component: TopicPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
