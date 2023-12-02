import { Component, AfterViewInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'frontend';
  scroll: any;
  flag:boolean=true;
  cicleMouseFollower(){
    window.addEventListener("mousemove",(e)=>{
      this.flag=false
      let circle = document.querySelector(".miniCircle") as HTMLElement
      circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }

  constructor() {}

  ngAfterViewInit() {
    const scrollContainer = document.querySelector('.page');

    if (scrollContainer instanceof HTMLElement) {
      this.scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true
      });
    } else {
      console.error('Scroll container not found');
    }

    this.cicleMouseFollower()


    
  }

  
  
}
