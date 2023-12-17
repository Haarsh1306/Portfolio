import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap, Expo, Power1 } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit , AfterViewInit{
constructor(){
  
}
scroll:any

imageHover(){
  document.querySelectorAll('.elem').forEach((ele)=>{
    var rotate=0;
    var rotateDiff =0;
    ele.addEventListener('mousemove',function(e){
      var event = e as MouseEvent
      rotateDiff = event.clientX - rotate;
      rotate = event.clientX;
      var diff = event.clientY - ele.getBoundingClientRect().top
      
      gsap.to(ele.querySelector('img'),{
        opacity:1,
        
        top: diff,
        left:event.clientX,
        rotate: gsap.utils.clamp(-20,20,rotateDiff)

      })
    })
  })
}
imageHoverLeave(){
  document.querySelectorAll('.elem').forEach((ele)=>{
    ele.addEventListener('mouseleave',function(e){
      gsap.to(ele.querySelector('img'),{
        opacity:0,
        duration:0.5,
      })
    })
  })
}
ngOnInit(): void {
  this.imageHover()
  this.imageHoverLeave()
  
}

ngAfterViewInit(): void {
  
}
}
