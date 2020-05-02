import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { LoginlayoutComponent } from './layout/loginlayout/loginlayout.component';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ReviewComponent } from './component/review/review.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminviewComponent } from './component/adminview/adminview.component';

const routes: Routes = [

  // routeing for the first login page
  {
    path: '', component: LoginlayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },

  //  routeing for register page
  { path: 'register', component: RegisterComponent },
  { path: 'review', component: ReviewComponent },

  //  routeing for forgot password
  {
    path: 'forgot', component: ForgotComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  
  //admin router
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminview',component:AdminviewComponent},


  //for home page
  {
    path: '', component: HomelayoutComponent,
    children: [
      {
        path: 'main',
        component: MaincontentComponent,
      }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
