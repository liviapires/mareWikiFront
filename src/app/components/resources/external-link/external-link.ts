import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmConstrucao } from "../em-construcao/em-construcao";

@Component({
  selector: 'app-external-link',
  imports: [EmConstrucao],
  templateUrl: './external-link.html',
  styleUrl: './external-link.css'
})
export class ExternalLink {

  constructor(private route: ActivatedRoute){
    const externalLink = this.route.snapshot.paramMap.get('route');
    
    switch (externalLink) {
      case 'youtube':
        // open YouTube channel in a new tab
        window.open('https://www.youtube.com/c/Mar%C3%A9Geek', '_blank');
        break;
      case 'twitch':
        window.open('https://www.twitch.tv/maregeek', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/mare.geek/', '_blank');
        break;
    }
  }
  
}
