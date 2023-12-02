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

  circleskew(){
    var xScale=1;
    var yScale =1;

    var xPrev =0;
    var yPrev =0;
    window.addEventListener("mousemove",(e)=>{
      var xDiff = e.clientX - xPrev;
      xPrev = e.clientX;

      var yDiff = e.clientY - yPrev;
      yPrev = e.clientY;

      xScale= gsap.utils.clamp(0.8,1.2,xDiff)
      yScale = gsap.utils.clamp(0.8,1.2,yDiff)
      this.cicleMouseFollower(xScale, yScale)
    })
  }
  cicleMouseFollower(xScale:number, yScale:number){
    window.addEventListener("mousemove",(e)=>{
      this.flag=false
      let circle = document.querySelector(".miniCircle") as HTMLElement
      circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xScale},${yScale})`
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

    this.circleskew()


    
  }

  
  
}
