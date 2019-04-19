import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BWMovies';

  ngOnInit(): void {
    console.log('onInit');
  }
}


// B[1-8][0-1][1-7][1-6]
