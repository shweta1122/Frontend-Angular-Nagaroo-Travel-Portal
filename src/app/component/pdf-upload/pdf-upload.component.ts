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
   let response = this.dataservice.updateDoc(this.comments,this.employeeId,this.ticketId)
   response.subscribe(data=> console.log(data))
  }

}
