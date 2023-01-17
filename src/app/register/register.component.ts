import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class HeaderComponent implements OnInit{

  Dataarray:any[]=[];

  constructor(private backendservice:BackEndServiceService){}



  ngOnInit(): void {

    this.backendservice.getUserData().subscribe((res)=>

    {this.Dataarray=res;})

  }
}