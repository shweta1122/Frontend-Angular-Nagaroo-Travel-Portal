import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service';

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

  updateStatus(status,id) {
    console.log(id)
    console.log(id)
    let response = this.service.updateStatus(status,id)
    response.subscribe();

  }

  dateSort(){
   
    this.ticketData.sort((a,b)=>{return a.createdAt - b.createdAt});
    
  }
  prioritySort()
  {
   
    
    this.ticketData.sort((a,b)=>{return  a.priority - b.priority});
   
    
  }
   
  filterTicket(search: string) {
    this.ticketData = this.ticketData.filter(o =>
      Object.keys(o).some(k => {
        if (typeof o[k] === 'string')
          return o[k].toLowerCase().includes(search.toLowerCase());
      })
    );
  }
  

}
