import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data-service';
import { Ticket } from 'src/app/Ticket';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  ticket: Ticket = new Ticket()
  id: any
  ticketId: any
  token: any
  constructor(private actRoute: ActivatedRoute, private dataservice: UserDataService,
    private router: Router) {
    this.ticketId = this.actRoute.snapshot.params.id;
    this.id = (sessionStorage.getItem('id'));
    this.token = (sessionStorage.getItem('token'));
    console.log(this.id)
    console.log(this.ticketId)
  }

  ngOnInit(): void {
  }

  updateTicket() {
    console.log(this.ticket)



    let credential = {
      id: this.id,
      token: this.token
    }

    let response = this.dataservice.updateTicket(credential, this.ticket, this.ticketId);
    response.subscribe();
    this.router.navigate(['/employee-dashboard'])
  }

}
