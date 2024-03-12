import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about: string = `I'm Harsh Verma, a final year B.Tech. student in Computer Engineering with a specialization in Data Science. I'm also a passionate software developer with experience as a Software Engineer Trainee at Chromeinfotech, Noida.

  As a full-stack MEAN developer, I enjoy crafting user-friendly and data-driven web applications.
  In my free time, I build personal projects to explore new technologies and hone my skills. I'm particularly interested in full-stack development.

  I'm always eager to learn and grow as a developer. If you're looking for a talented and enthusiastic full-stack developer, I'd love to connect ! Feel free to reach out to me at or connect with me on LinkedIn`.replace(/\n/g, '<br>');
  constructor(){

  }
  downloadResume(){
    const pdfPath = "../../assets/Resume_HarshVerma.pdf";
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Resume_HarshVerma.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
