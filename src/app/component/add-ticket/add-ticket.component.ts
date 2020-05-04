import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Ticket';
import { UserDataService } from 'src/app/user-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  ticket : Ticket = new Ticket()
  id : any
  token : any
  constructor(public dataservice: UserDataService, private router: Router) { }

  ngOnInit(): void {
    

   

  }


  addTicket() {
    console.log(this.ticket)
    this. id = (sessionStorage.getItem('id'))
    this. token = (sessionStorage.getItem('token'))
    console.log("hi this is token", this.token)

    let credential = {
      id: this.id,
      token: this.token
    }
    
    let response = this.dataservice.addTicket(credential,this.ticket);
    response.subscribe();
    this.router.navigate(['/employee-dashboard'])
  }

}
