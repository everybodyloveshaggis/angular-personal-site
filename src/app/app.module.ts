import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { PersonalExperienceComponent } from './personal-experience/personal-experience.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent
  , SummaryComponent, PersonalExperienceComponent, ProfessionalExperienceComponent, ProfessionalExperienceComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
, exports: [SummaryComponent, PersonalExperienceComponent, ProfessionalExperienceComponent, NavBarComponent]})
export class AppModule { }
