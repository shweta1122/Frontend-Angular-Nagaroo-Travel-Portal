import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private service : UserDataService, private router : Router) { }

  ngOnInit(): void {
  }

  login(form : NgForm) {

    let userName = form.value.userName
    let password = form.value.password
     let credential = {
       "userName": userName,
       "password": password
     }

     let response = this.service.adminLogin(credential)
     response.subscribe(data => this.redirectPage(data))
    

  }

  redirectPage(data) {
    console.log(data)
    if(data === 'succesfull')
    this.router.navigate(['/adminview'])
    else {
      alert(data)
    }

  }







}
