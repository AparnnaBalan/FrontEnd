import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {
  constructor(private fb:FormBuilder,private BackEndService:BackEndServiceService){}
  FileuploadFormGroup=this.fb.group(
    {
      category:[''],
      videofile:['https://localhost:44336/video/{videofile}']

    }
  )
onsubmit()
{
  console.log(this.FileuploadFormGroup.value);
  this.BackEndService.fileupload(this.FileuploadFormGroup.value)
}
ngOnInit(): void {
  
}
}
