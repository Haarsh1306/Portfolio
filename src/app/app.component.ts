import { Component, AfterViewInit } from '@angular/core';

// import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'frontend';
  scroll: any;
  flag:boolean=true;

  timeout:any;

  // circleskew(){
  //   var xScale=1;
  //   var yScale =1;

  //   var xPrev =0;
  //   var yPrev =0;
  //   window.addEventListener("mousemove",(e)=>{
  //     clearTimeout(this.timeout)
  //     var xDiff = e.clientX - xPrev;
  //     xPrev = e.clientX;

  //     var yDiff = e.clientY - yPrev;
  //     yPrev = e.clientY;

  //     xScale= gsap.utils.clamp(0.8,1.2,xDiff)
  //     yScale = gsap.utils.clamp(0.8,1.2,yDiff)
  //     this.cicleMouseFollower(xScale, yScale)

  //     this.timeout = setTimeout(function(){
  //       let circle = document.querySelector(".miniCircle") as HTMLElement
  //       circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1,1)`
  //     },100)
  //   })
  // }
  // cicleMouseFollower(xScale:number, yScale:number){
  //   window.addEventListener("mousemove",(e)=>{
  //     this.flag=false
  //     let circle = document.querySelector(".miniCircle") as HTMLElement
  //     circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xScale},${yScale})`
  //   })
  // }

  

  constructor() {}

  ngAfterViewInit() {
    // const scrollContainer = document.querySelector('.page');

    // if (scrollContainer instanceof HTMLElement) {
    //   this.scroll = new LocomotiveScroll({
    //     el: scrollContainer,
    //     smooth: true,
    //   });

      

    // } else {
    //   console.error('Scroll container not found');
    // }

    // this.circleskew()

   
    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('mouseenter', (ele) => {
        gsap.to(a.querySelector('::before'), {
          width: '100%',
          duration: 0.5,
          ease: 'power2.inOut'
        });
      });
  
      a.addEventListener('mouseleave', (e) => {
        gsap.to(a.querySelector('::before'), {
          width: '0',
          duration: 0.5,
          ease: 'power2.inOut'
        });
      });
    });
  }

 

  
  
}
