import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service';
import { Router } from '@angular/router';
import { tokenName } from '@angular/compiler';
 
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  
// Pagination parameters.
  p = 1;
  count = 5;
  //corona api
  public showMe = false;
 
  ticketData : any
  constructor(private service: UserDataService, private router : Router) {
   

   }
 
  ngOnInit(): void {
  
    console.log(length)
    let id = (sessionStorage.getItem('id'))
    let token = (sessionStorage.getItem('token'))
    console.log("hi this is token", token)
    console.log(id)
    if(id == 'null') {
      this.router.navigate(['/'])
    }
    else{
    let credential = {
      id: id,
      token: token
    }
    this.getTicket(credential)
  }
}
 
  getTicket(credential) {
    console.log("----------", credential)
    let id = credential.id
    let token = credential.token
    sessionStorage.setItem('id', id)
    sessionStorage.setItem('token', token)
    let response = this.service.getTicket(credential);
    response.subscribe(data => this.setView(data))
  }
 
  setView(ticketData) {
    this.ticketData=ticketData
    console.log(ticketData)
  }


  logOut() {
    sessionStorage.clear()
    this.router.navigate(['/'])
  }
}

 