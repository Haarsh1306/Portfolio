import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  about: string =
    `I am a Software Development Engineer (SDE 1) at Amazon, passionate about full stack development and building impactful software solutions. As a 2024 graduate, I have worked extensively with React, TypeScript, Node.js, and Django, gaining hands-on experience in full-stack development.

    Before joining Amazon, I completed software development internships at Airtel, ChromeInfotech, and WorkIndia, where I contributed to scalable applications and deepened my technical expertise.

    I am highly passionate about software development and love building things that make a difference. Always eager to learn and grow, I thrive on solving complex problems and exploring new technologies.`.replace(/\n/g, '<br>');
  constructor() { }
  downloadResume() {
    const pdfPath = '../../assets/Resume_HarshVerma.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Resume_HarshVerma.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
