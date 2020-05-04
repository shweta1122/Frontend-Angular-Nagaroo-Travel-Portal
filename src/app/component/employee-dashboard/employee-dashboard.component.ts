import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  
  id : any
  token : any
  ticketData : any
  constructor(private service: UserDataService) { }

  ngOnInit(): void {
    this. id = (sessionStorage.getItem('id'))
    this. token = (sessionStorage.getItem('token'))
   // console.log("hi this is token", this.token)

    let credential = {
      id: this.id,
      token: this.token
    }
    this.getTicket(credential)


  }



  getTicket(credential) {
   // console.log("----------", credential)
    let id = credential.id
    let token = credential.token
    sessionStorage.setItem('id', id)
    sessionStorage.setItem('token', token)
    let response = this.service.getTicket(credential);
    response.subscribe(data => this.setView(data))
  }

  setView(ticketData) {

    this.ticketData=ticketData
    //console.log(ticketData)
  }

  addTicket() {
    
  }

}

