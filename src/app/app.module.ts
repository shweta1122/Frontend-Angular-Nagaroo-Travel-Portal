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
import { FormsModule } from '@angular/forms'
import { UserDataService } from './user-data-service';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { AddTicketComponent } from './component/add-ticket/add-ticket.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateTicketComponent } from './component/update-ticket/update-ticket.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers:
    [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
