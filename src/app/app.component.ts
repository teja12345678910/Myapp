import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teja';
  modal:any;
  
  addData(modal)
  {
	  debugger;
	  	  alert("");

	  alert(modal.userName);
	  
	  
	 
	 
  }
  
}
