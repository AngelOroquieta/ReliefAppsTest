import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() video: string;

  videos: string[] = [];

  constructor() {
    this.video = '';
  }

  ngOnInit(): void {
    this.videos.push(this.video);
  }

}
