import { Component } from '@angular/core';

import '../js/test.js';
import '../js/materialize.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
	  '../css/materialize.min.css'
  ]
})

export class AppComponent {
  title = 'app works!';
}