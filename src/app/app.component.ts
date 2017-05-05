import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Nice to meet you {{name}}!</h1>`
})
export class AppComponent { name = 'Angular2'; }
