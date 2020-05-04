import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email : string
  constructor(private service : UserDataService) { }

  ngOnInit(): void {
  }



  onSubmit() {
    console.log(this.email)
    let response = this.service.forgotPassword(this.email)
    response.subscribe()

  }

}
