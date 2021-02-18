import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'History',
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
  }

  ngOnChanges(changes: SimpleChanges) {
    this.addToHist();
  }

  addToHist() {
    this.videos.push(this.video);
  }
}
