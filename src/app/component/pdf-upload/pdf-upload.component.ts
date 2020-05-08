import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data-service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.css']
})
export class PdfUploadComponent implements OnInit {
  ticketId: any
  employeeId: any
  comments: string
  file: any


uploadForm: FormGroup;


  constructor(private actRoute: ActivatedRoute, private dataservice: UserDataService,
    private router: Router, private formBuilder:FormBuilder) {

    this.ticketId = this.actRoute.snapshot.params.ticketId
    this.employeeId = this.actRoute.snapshot.params.employeeId

    console.log(this.ticketId)
    console.log(this.employeeId)
  }

  ngOnInit(): void {

    this.uploadForm = this.formBuilder.group({
      file: [''],
      ticketId: '',
      comments: '',
      adminId : ''
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }


  submitComment() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);
    formData.append('ticketId', this.ticketId);
    formData.append('comments', (<HTMLInputElement>document.getElementById('comments')).value);
    formData.append('adminId', "1");
 
    this.dataservice.updateDoc(formData).subscribe(
      data => {
        console.log("posted ");
      },
      err => {
        console.log("error", err);
      }
    );
 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }




  upload() {
    // console.log(this.file)
    // console.log(this.comments)
    // let body = {
    //   "file": (<HTMLInputElement>document.getElementById('file')).value,
    //   "adminId": 1,
    //   "ticketId": this.ticketId,
    //   "comments": this.comments
    // }
    // let response = this.dataservice.updateDoc(body);
    // response.subscribe(data => console.log(data))
  }

}
