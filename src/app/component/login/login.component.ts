import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ticketData: any
  
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
    response.subscribe(data => this.sendCredential(data),
    error => alert('Invalid Login Credentials'));
    
  }

  sendCredential(credential) {
    console.log(credential)
    let id =credential.id
    let token = credential.token
    sessionStorage.setItem('id' , id)
    sessionStorage.setItem('token' , token)
    this.router.navigate(['/employee-dashboard'])
  }

  sendTicket(ticketDetails) {
    this.ticketData = ticketDetails
    console.log(ticketDetails)
    //console.log(ticketDetails.requesttype)
    this.router.navigate(['/employee-dashboard'])



  }

 

}
