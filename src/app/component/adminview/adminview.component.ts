import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  p = 1;
  count = 5;
  ticketData : any
  constructor(private service : UserDataService) {
    let response = this.service.getAdminTickets()
    response.subscribe(data => this.ticketData = data)
   }

  ngOnInit(): void {

    
  }

}
