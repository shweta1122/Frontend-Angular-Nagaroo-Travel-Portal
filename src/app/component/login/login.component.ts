import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserCredential } from 'src/app/user-credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ticketData: any
  credential : UserCredential = new UserCredential()
  constructor(private service: UserDataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form : NgForm) {
   console.log(" ***",form.value.userName)
   let userName = form.value.userName
   let password = form.value.password
    console.log("reached")
    let credential = {
      "userName": userName,
      "password": password
    }
    console.log(credential)
    let response = this.service.doLogin(credential);
    response.subscribe(data => this.sendCredential(data));
    
  }

  sendCredential(credential) {
    console.log(credential)
    let id =credential.id
    let token = credential.token
    sessionStorage.setItem('id' , id)
    sessionStorage.setItem('token' , token)
    // let response = this.service.getTicket(credential);
    // response.subscribe(data => this.sendTicket(data))
    this.router.navigate(['/employee-dashboard'])
  }

  sendTicket(ticketDetails) {
    this.ticketData = ticketDetails
    console.log(ticketDetails)
    //console.log(ticketDetails.requesttype)
    this.router.navigate(['/employee-dashboard'])



  }

}
