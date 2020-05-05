import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';
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
     console.log("reached")
     let credential = {
       "userName": userName,
       "password": password
     }

     let response = this.service.adminLogin(credential)
     response.subscribe(data => console.log(data))
     this.router.navigate(['/adminview'])

  }




}
