import { Component ,OnInit} from '@angular/core';
import { gsap, Expo } from 'gsap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
constructor(){}
animation(){
  var t1 = gsap.timeline()

  t1.from(".nav",{
    y:-10,
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut

  })
}
ngOnInit(): void {
    this.animation()
}
}
