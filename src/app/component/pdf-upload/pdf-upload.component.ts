import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data-service';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.css']
})
export class PdfUploadComponent implements OnInit {
  ticketId : any
  employeeId : any
  comments: string
  file : any
  constructor(private actRoute: ActivatedRoute, private dataservice: UserDataService,
    private router: Router) {

      this.ticketId = this.actRoute.snapshot.params.ticketId
      this.employeeId = this.actRoute.snapshot.params.employeeId

      console.log(this.ticketId)
      console.log(this.employeeId)
     }

  ngOnInit(): void {


  }

  upload() {
    console.log(this.file)
    console.log(this.comments)
    let body = {
      file : this.file ,
      employeeId : this.employeeId,
      ticketId : this.ticketId,
      comments : this.comments
    }
   let response = this.dataservice.updateDoc(body);
   response.subscribe(data=> console.log(data))
  }

}
