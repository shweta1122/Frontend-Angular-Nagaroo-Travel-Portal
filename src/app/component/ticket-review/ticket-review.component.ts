import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { UserDataService } from 'src/app/services/user-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-review',
  templateUrl: './ticket-review.component.html',
  styleUrls: ['./ticket-review.component.css']
})
export class TicketReviewComponent implements OnInit {
ticket : Ticket
id : any
token : any
  constructor(public dataservice: UserDataService, private router: Router) { 
}
  ngOnInit(): void {

    this.ticket = this.dataservice.ticket
  }

  
  ngOnDestroy() {
    this.ticket = null
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


  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

}
