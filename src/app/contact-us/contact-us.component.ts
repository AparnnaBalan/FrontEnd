import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
  constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService){}

  ContactUsFormGroup=this.fb.group(

    {

     

      name:[''],

      email:[''],

      subject:[''],

      message:['']

     

    }

 )

  onsubmit()

  {

   console.log(this.ContactUsFormGroup.value);

     this.BackEndService.contact(this.ContactUsFormGroup.value)

  }

 

  ngOnInit():void{

  }



}


