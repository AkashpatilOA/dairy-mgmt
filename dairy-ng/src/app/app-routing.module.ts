import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportComponent } from './components/report/report.component';
import { ViewReportComponent } from './components/view-report/view-report.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'milk-report', component:ReportComponent},
  { path: 'view-report', component:ViewReportComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
