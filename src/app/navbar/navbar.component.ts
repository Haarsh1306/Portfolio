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

    const dynamicText = document.querySelector('h4 span');
    // dynamicText?.classList.add('stop-blink')
    const words= ['Programmer', 'Freelancer', 'Problem Solver', 'Designer'];
    let wordIndex = 0;
    let charIndex =0;
    let isDeleting = false;
    const typeEffect = ()=>{
      const curentWord = words[wordIndex];
      const currentChar = curentWord.substring(0, charIndex)
      dynamicText!.textContent=currentChar
      dynamicText?.classList.add('stop-blink')

      if(!isDeleting && charIndex < curentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200);
      }
      else if(isDeleting && charIndex >0){
        charIndex--;
        setTimeout(typeEffect, 100);
      }
      else{
        isDeleting = !isDeleting;
        dynamicText?.classList.remove('stop-blink')
        wordIndex = !isDeleting ? (wordIndex+1)%words.length : wordIndex;
        setTimeout(typeEffect,1200)
      }
    }
    // typeEffect()
    setTimeout(typeEffect,850);
}
}
