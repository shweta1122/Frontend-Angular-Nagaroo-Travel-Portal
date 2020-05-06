import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/user';
import { UserDataService } from 'src/app/user-data-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  submitted = false;
  user: User = new User();


  constructor(public dataservice: UserDataService, private router: Router, private formBuilder: FormBuilder) { }


  ngOnDestroy(): void {
    this.dataservice.user = this.user
  }


  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      businessUnit: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+{2}-?)|0)?[0-9]{10}$")]],
      address1: ['', Validators.required],
      address2: ['', Validators.nullValidator],
      city: ['', Validators.required],
      state: ['', Validators.required],
      Country: ['', Validators.required],
      zip_number: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });


  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.router.navigate(["/review"]);
    // display form values on success
    // alert('SUCCESS!!');


  }

}
