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
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { AddTicketComponent } from './component/add-ticket/add-ticket.component';
import { UpdateTicketComponent } from './component/update-ticket/update-ticket.component';
import { PdfUploadComponent } from './component/pdf-upload/pdf-upload.component';
import { EmployeePdfViewComponent } from './component/employee-pdf-view/employee-pdf-view.component';
import { TicketReviewComponent } from './component/ticket-review/ticket-review.component';

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

  },
 
    {
      path: 'employee-dashboard/update/:ticketId' , component :UpdateTicketComponent,
    },
  
  {
    path: 'adminview/uploadPdf/:ticketId/:employeeId' , component :PdfUploadComponent ,
  },

  {
    path : 'employee-dashboard/viewTicketDoc/:ticketId', component : EmployeePdfViewComponent
  },

  {
    path : 'ticketReview', component : TicketReviewComponent
  },

  

  //admin router
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminview', component: AdminviewComponent },

  //Add ticket
  { path: 'addTicket', component: AddTicketComponent },

 

  //for home page
  {
    path: '', component: HomelayoutComponent,
    children: [
      {
        path: 'employee-dashboard',
        component: EmployeeDashboardComponent,
      }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
