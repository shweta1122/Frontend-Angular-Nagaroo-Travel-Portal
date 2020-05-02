import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/user';
import { UserDataService } from 'src/app/user-data-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {


  user: User = new User();
  constructor(public dataservice: UserDataService) { }


  ngOnDestroy(): void {
    this.dataservice.user = this.user
  }


  ngOnInit(): void {
  }

}
