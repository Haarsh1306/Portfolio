import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
text:number;
 constructor(){
  let date = new Date()
  this.text = date.getTime()
 }
}
