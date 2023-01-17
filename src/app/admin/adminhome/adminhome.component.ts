import { Component, OnInit } from '@angular/core';
import { IVideoConfig } from 'ngx-video-list-player';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  config: IVideoConfig = {
    sources: [
      {
        src: 'assets/videos/abc.mp4',
        videoName: 'Coding Challenge',
        artist: 'Veena',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'BeautyTips',
        artist: 'Amal',
      },{
        src: 'assets/videos/x.mp4',
        videoName: 'Save Plant',
        artist: 'Noora',
      },
      {
        src: 'assets/videos/xy.mp4',
        videoName: 'BiriyaniRecipe',
        artist: 'Meena',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'M4.TECH',
        artist: 'Thomas',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Songs',
        artist: 'Arun',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'Biriyani Recepies',
        artist: 'Nila',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Module6',
        artist: 'Mila',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'Easy Chicken Curry',
        artist: 'Vila',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Dance',
        artist: 'Rahman',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'Dance',
        artist: 'Danie',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Music',
        artist: 'Raman',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'BiriyaniRecipe',
        artist: 'Seetha',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'BeautyTips',
        artist: 'Sankar',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'Receipes',
        artist: 'Miya',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'FoodVlogs',
        artist: 'Amitha',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Yoga',
        artist: 'Riya',
      },
    ],
  };
  Dataarray:any[]=[];

  constructor(private backendservice:BackEndServiceService){}



  ngOnInit(): void {

    this.backendservice.getvideoData().subscribe((res)=>

    {this.Dataarray=res;})

  }
}



