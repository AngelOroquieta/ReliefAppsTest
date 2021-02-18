import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  @Input() url: string;

  constructor() {
    this.url = '';
  }

  ngOnInit(): void {
    // YouTube API script
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
