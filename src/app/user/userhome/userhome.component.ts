import { Component } from '@angular/core';
import { IVideoConfig } from 'ngx-video-list-player';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'],
})
export class UserhomeComponent {
  config: IVideoConfig = {
    sources: [
      {
        src: 'assets/videos/abc.mp4',
        videoName: 'Cooking',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'BeautyTips',
        artist: 'video2_artist',
      },{
        src: 'assets/videos/ab.mp4',
        videoName: 'Coding Challenge',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Food Vlogs',
        artist: 'video2_artist',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'M4.TECH',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Songs',
        artist: 'video2_artist',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'Biriyani Recepies',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'Module6',
        artist: 'video2_artist',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'Easy Chicken Curry',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'video2_name',
        artist: 'video2_artist',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'video1_name',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'video2_name',
        artist: 'video2_artist',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'video1_name',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'video2_name',
        artist: 'video2_artist',
      },{
        src: 'assets/videos/abc.mp4',
        videoName: 'video1_name',
        artist: 'video1_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'video2_name',
        artist: 'video2_artist',
      },
      {
        src: 'assets/videos/xyz.mp4',
        videoName: 'video2_name',
        artist: 'video2_artist',
      },
    ],
  };
}
