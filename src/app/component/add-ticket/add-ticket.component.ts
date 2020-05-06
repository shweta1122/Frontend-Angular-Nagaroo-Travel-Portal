import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Ticket';
import { UserDataService } from 'src/app/user-data-service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  ticket : Ticket = new Ticket()
  id : any
  token : any
  registerForm: FormGroup;
  submitted = false;
  constructor(public dataservice: UserDataService, private router: Router,
    private formBuilder : FormBuilder) { }

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
      upperBound : ['',Validators.nullValidator]
    });
    

   

  }

  get check() { return this.registerForm.controls; }
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
     //this.addTicket();
     this.router.navigate(['/ticketReview'])
    }


  // addTicket() {
  //   console.log(this.ticket)
  //   this. id = (sessionStorage.getItem('id'))
  //   this. token = (sessionStorage.getItem('token'))
  //   console.log("hi this is token", this.token)

  //   let credential = {
  //     id: this.id,
  //     token: this.token
  //   }
    
  //   let response = this.dataservice.addTicket(credential,this.ticket);
  //   response.subscribe();
  //   this.router.navigate(['/employee-dashboard'])
  // }

  
  ngOnDestroy(): void {
    this.dataservice.ticket = this.ticket
  }

}
