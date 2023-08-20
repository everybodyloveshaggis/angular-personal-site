import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { PersonalExperienceComponent } from './personal-experience/personal-experience.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';


/*
Routing
*/
const routes: Routes = [
  {    path: 'home',                        component:SummaryComponent,                     title:'Scott McMahon'  },
  {    path: 'personal-experience',         component:PersonalExperienceComponent,          title:'Scott M: Personal Experience'  },
  {    path: 'professional-experience',     component:ProfessionalExperienceComponent,      title:'Scott M: Professional Experience'  },
  {    path: 'working-with-disabilities',   component:SummaryComponent,                     title:'Scott M: Working With Disabilities'  },
  {    path: 'contact-me',                  component:SummaryComponent,                     title:'Scott M: Contact Me!'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
