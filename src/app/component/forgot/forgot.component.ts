import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private service : UserDataService) { }

  ngOnInit(): void {
  }



  onSubmit(form ) {
  
  
    let data = {
      userName : form.username.value
    }
    let response = this.service.forgotPassword(data)
    response.subscribe()

  }

}
