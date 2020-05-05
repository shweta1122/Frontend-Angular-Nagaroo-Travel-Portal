import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data-service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-employee-pdf-view',
  templateUrl: './employee-pdf-view.component.html',
  styleUrls: ['./employee-pdf-view.component.css']
})
export class EmployeePdfViewComponent implements OnInit {
  comments: any;

  constructor(private activate: ActivatedRoute, private route: Router, private service
    : UserDataService) {

    // console.log(this.activate.snapshot.params.ticketId)
    let response = service.downloadDoc(this.activate.snapshot.params.ticketId)
    response.subscribe(data => {
      // console.log(data);
      this.comments = data;
      // console.log(this.comments);
      
    });
  }

  ngOnInit(): void {
  }

  display(comment) {
    console.log(comment.pdf);
    fetch(`data:application/pdf;base64,${comment.pdf}`)
      .then(res => res.blob())
      .then(blob => FileSaver.saveAs(blob, "adminResponse.pdf"))
  }

}
