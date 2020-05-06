import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data-service';
import { Ticket } from 'src/app/Ticket';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  registerForm: FormGroup;
  submitted = false;
  constructor(private actRoute: ActivatedRoute, private dataservice: UserDataService,
    private router: Router,  private formBuilder : FormBuilder) {
    this.ticketId = this.actRoute.snapshot.params.ticketId;
    
    this.id = (sessionStorage.getItem('id'));
    this.token = (sessionStorage.getItem('token'));
    console.log(this.id)
    console.log(this.ticketId)
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      requestType: ['', Validators.required],
      priority: ['', Validators.required],
      travelCity: ['', Validators.required],
      fromLocation: ['', Validators.required],
      travelDate: ['', Validators.required],
      endDate: ['', Validators.required],
      passportNumber: ['',[Validators.required,Validators.maxLength(25)]],
      expenseBornBy: ['', Validators.required],
      projectName: ['', Validators.required],
      travelAprrover : ['',Validators.nullValidator],
      additionalDetail: ['', Validators.required],
      upperBound : ['', Validators.nullValidator]
    });
    
  }


  get check() { return this.registerForm.controls; }
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
     this.updateTicket();
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
