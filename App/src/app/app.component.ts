import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  url: string = '';
  video: string = '';

  showVideo(e: string) {
    let aux = e;

    // url modification to remove protocol, video start time, channel, etc.
    if (aux.indexOf("&") == -1) {

      this.url = aux.replace('https://www.youtube.com/watch?v=', '')
    }
    else {

      this.url = aux.substring(aux.indexOf("=") + 1, aux.indexOf("&"));
    }
  }

  addToHist(e: string) {
    this.video = e;
  }
}
