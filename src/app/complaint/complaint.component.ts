import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  Dataarray:any[]=[];

  constructor(private backendservice:BackEndServiceService){}



  ngOnInit(): void {

    this.backendservice.getComplaintsstatus().subscribe((res)=>

    {this.Dataarray=res;})

  }

}
