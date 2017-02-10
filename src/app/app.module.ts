import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './components/app/app.component';
import {Routes, RouterModule} from "@angular/router";

import { AboutComponent } from './components/about/app.component.about';
import { EducationComponent } from './components/education/app.component.education';
import { ExperienceComponent } from './components/experience/app.component.experience';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';

const appRoutes: Routes = [
  { path: 'education', component: EducationComponent, data: { name: 'My Route Name' } },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'works', component: WorksComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBOxqr_1v9eAgA-SB86HOl5NkZnEHtHAUE",
      authDomain: "sergiomeza-e5bfa.firebaseapp.com",
      databaseURL: "https://sergiomeza-e5bfa.firebaseio.com/",
      storageBucket: ""
    }),
  ],
  providers: [Title],
  bootstrap:[AppComponent]
})

export class AppModule { }
