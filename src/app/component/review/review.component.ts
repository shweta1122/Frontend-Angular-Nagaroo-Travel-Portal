import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit, OnDestroy {

  // message: string = "just for test";
  user: User;
  // message: any;

  constructor(public dataservice: UserDataService, private router: Router) { }


  ngOnDestroy() {
    this.user = null
  }

  ngOnInit() {
    console.log("------------")
    console.log(this.dataservice.user);
    
    this.user = this.dataservice.user
  }


  //print sestion part
  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

  public registerNow() {
    let response = this.dataservice.doRegistration(this.user);
    response.subscribe();
    this.router.navigate(['/'])


  }
}
