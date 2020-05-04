import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserDataService) { }

  ngOnInit(): void {
  }

  login() {
    console.log("reached")
    let credential = {
      "userName": "arrebcer@gmail.com",
      "password": "www"
    }
    console.log(credential)
    let response = this.service.doLogin(credential);
    response.subscribe(data => this.getTicket(data));
  }

  getTicket(token) {
    let response = this.service.getTicket(token);
    response.subscribe(data =>console.log(data))
  }

}
