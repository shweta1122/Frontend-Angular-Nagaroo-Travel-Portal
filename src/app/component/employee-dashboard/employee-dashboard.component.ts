import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  

  ticketData : any
  constructor(private service: UserDataService) { }

  ngOnInit(): void {
    let id = (sessionStorage.getItem('id'))
    let token = (sessionStorage.getItem('token'))
    console.log("hi this is token", token)

    let credential = {
      id: id,
      token: token
    }
    this.getTicket(credential)


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

}

