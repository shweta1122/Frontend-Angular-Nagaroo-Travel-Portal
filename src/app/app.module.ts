import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { LoginlayoutComponent } from './layout/loginlayout/loginlayout.component';
import { HeaderComponent } from './component/header/header.component';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ReviewComponent } from './component/review/review.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminheaderComponent } from './component/adminheader/adminheader.component';
import { AdminviewComponent } from './component/adminview/adminview.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserDataService } from './user-data-service';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { AddTicketComponent } from './component/add-ticket/add-ticket.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateTicketComponent } from './component/update-ticket/update-ticket.component';
import { PdfUploadComponent } from './component/pdf-upload/pdf-upload.component';
import { EmployeePdfViewComponent } from './component/employee-pdf-view/employee-pdf-view.component';
import { TicketReviewComponent } from './component/ticket-review/ticket-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    LoginlayoutComponent,
    HeaderComponent,
    MaincontentComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ReviewComponent,
    AdminloginComponent,
    AdminheaderComponent,
    AdminviewComponent,
    EmployeeDashboardComponent,
    AddTicketComponent,
    UpdateTicketComponent,
    PdfUploadComponent,
    EmployeePdfViewComponent,
    TicketReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers:
    [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
