import { Component, OnInit } from '@angular/core';
import { gsap, Expo } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(){}
animation(){
  var t1 = gsap.timeline()

 t1.to(".boundingElem",{
    y:0,
    duration:2,
    ease:Expo.easeInOut,
    stagger: .2
  })
}
ngOnInit(): void {
  this.animation()
}
}
