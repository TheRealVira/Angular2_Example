import { Component,OnChanges,HostListener } from '@angular/core';

import '../js/test.js';

const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
	text = '';
	rText = '';
	key;

	oldLength = 10;
	length = 10;
	
	constructor(){
		this.generate();
	}

	@HostListener('document:keypress', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) { 
		this.key = event.key;
		if ((event.keyCode ? event.keyCode : event.which) == 13) { //Enter keycode
			this.generate();
		}
	}

	ngDoCheck(){
		if(this.oldLength!=this.length){
			this.oldLength = this.length;
			
			if(this.length==42){
				console.log(':)');
			}
		}
		
		this.rText = this.text.split("").reverse().join("").substring(0,this.length)+(this.text.length>this.length?"...":"");
	}

	generate(){
		this.text = '';
		
		for( var i=0; i < this.length; i++ )
        	this.text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
}