import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap, Expo, Power1 } from 'gsap';
import { Router } from '@angular/router';
import LocomotiveScroll from 'locomotive-scroll';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit , AfterViewInit{
constructor( private router:Router){
  
}
scroll:any

openMoshify(){
  window.open('https://webmoshify.onrender.com/')
}
openQrify(){
  window.open('https://q-rify-five.vercel.app/')
}

openWhatsAppChat(){
  window.open('https://whatsappchatanalyzer-zye8.onrender.com/')
}
openFyle(){
  window.open("https://fyle-internship-challenge-23-eight.vercel.app/")
}
imageHover(){
  document.querySelectorAll('.elem').forEach((ele)=>{
    let rotate=0;
    let rotateDiff =0;
    ele.addEventListener('mousemove',function(e){
      let event = e as MouseEvent
      rotateDiff = event.clientX - rotate;
      rotate = event.clientX;
      let diff = event.clientY - ele.getBoundingClientRect().top
      
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
