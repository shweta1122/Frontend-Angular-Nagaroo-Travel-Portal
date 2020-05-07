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
  city: any;
  state: any;
  regionService: any;
  citySelected: string;
  country: any;
  countrySelected: string;
  stateSelected: string;

  countryCode: any;
  stateCode: any;

  constructor(public dataservice: UserDataService, private router: Router, private formBuilder: FormBuilder) {
    this.dataservice.getCountries().subscribe(
      data => {

        this.country = data
      },
      err => {
        console.log(err);

      }
    )

  }


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
      country: ['', Validators.required],
      zip_number: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });


  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.user.country = this.countrySelected
    this.user.city = this.citySelected
    this.user.state = this.stateSelected
    console.log('on submti', this.registerForm.value.country);
    console.log(this.registerForm.value.state);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.router.navigate(["/review"]);
    // display form values on success
    // alert('SUCCESS!!');


  }

  getState(event) {
    let id = Number(event.id);
    this.countrySelected = event.name;
    this.dataservice.getStates(id).subscribe(
      data => {

        this.state = Object.values(data);
      },
      err => {
        console.log("err", err);
      }
    )
  }

  getCity(event) {
    let id = Number(event.id);
    this.stateSelected = event.name;
    this.dataservice.getCities(id).subscribe(
      data => {

        this.city = Object.values(data);
      },
      err => {
        console.log("error", err);
      }
    )
  }

  getValue(event) {
    this.citySelected = event;

  }

}
