import { Component, OnInit } from '@angular/core';
import { gsap, Expo } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(){}
onArrowClick(){
  const scrollAmount = 700; 

 
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth'
  });
}
onArrowClickMore(){
  const scrollAmount = 2350; 

 
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth' 
  });
}
animation(){
  let t1 = gsap.timeline()

 t1.to(".boundingElem",{
    y:0,
    duration:3,
    ease:Expo.easeInOut,
    stagger: .2,
    delay:-1
  })
  .from(".footerHome",{
    y:-10,
    opacity:0,
    delay:-1.5,
    ease:Expo.easeInOut,
    duration: 2,
  })
}
ngOnInit(): void {
  this.animation()
}
}
