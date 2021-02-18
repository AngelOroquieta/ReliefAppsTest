import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  @Input() url: string;

  bookmarks: string[] = [];

  constructor() {
    this.url = '';
  }

  ngOnInit(): void {
  }

  addToBookmarks() {
    this.bookmarks.push(this.url);
  }
}
