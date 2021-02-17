import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
    this.eventEmitter.emit("https://www.youtube.com/watch?v=k5E2AVpwsko");
    //this.eventEmitter.emit(document.getElementById("url"));
  }
}
