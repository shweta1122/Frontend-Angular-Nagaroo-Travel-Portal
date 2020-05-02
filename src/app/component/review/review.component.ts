import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit, OnDestroy {

  message: string = "just for test";
  user:User;

  constructor(public dataservice : UserDataService) { }


  ngOnDestroy() {
    this.user =null
  }

  ngOnInit() {
    console.log("------------")
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
}
