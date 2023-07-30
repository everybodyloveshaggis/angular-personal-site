import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { PersonalExperienceComponent } from './personal-experience/personal-experience.component';

@NgModule({
  declarations: [
    AppComponent
  , SummaryComponent, PersonalExperienceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
, exports: [SummaryComponent, PersonalExperienceComponent]})
export class AppModule { }
