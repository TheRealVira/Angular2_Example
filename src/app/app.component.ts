import { Input,Component,OnChanges } from '@angular/core';

import '../js/test.js';

const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnChanges {
	text = '';

	oldLength = 10;
	length = 10;
	
	constructor(){
		this.generate();
	}
	
	ngOnChanges(changeRecord) {
		if(length==42){
			alert(':)');
		}
	}

	ngDoCheck(){
		if(this.oldLength!=this.length){
			this.oldLength = this.length;
			
			if(this.length==42){
				console.log(':)');
			}
		}
	}

	generate(){
		this.text = '';
		
		for( var i=0; i < this.length; i++ )
        	this.text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
}