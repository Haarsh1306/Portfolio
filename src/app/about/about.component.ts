import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
