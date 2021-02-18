import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter<string>();
  url: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
    this.eventEmitter.emit(this.url);
  }
}
