import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usertype';

  userType :string= '';
  linksVisible = false;
  
  onSubmit() {
 
  this.linksVisible = true;
 
  }
  



}


