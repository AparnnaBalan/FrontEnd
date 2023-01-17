import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit {
  Dataarray:any[]=[];

  constructor(private backendservice:BackEndServiceService){}



  ngOnInit(): void {

    this.backendservice.getUserData().subscribe((res)=>

    {this.Dataarray=res;})

  }

}
