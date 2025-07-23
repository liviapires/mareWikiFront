import { Component, Input, signal, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { MenuItem } from '../menu-item/menu-item';

export type MenuItems = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItems[];
}

@Component({
  selector: 'app-sidenav',
  imports: [ 
    CommonModule,
    MatListModule,
    MenuItem
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css'
})

export class Sidenav {

  menuItems = signal<MenuItems[]>([
    {
      icon: 'landscape_2',
      label: 'Desaventureiros',
      route: 'desaventureiros',
      subItems: [
        {
          icon: 'info',
          label: 'Sobre',
          route: 'sobre'
        },
        { 
          icon: 'person', 
          label: 'Personagens', 
          route: 'personagens'
        },
        { 
          icon: 'tv', 
          label: 'Episódios', 
          route: 'episodios' 
        }
      ]
    },
    { 
      icon: 'casino', 
      label: '20 Natural', 
      route: 'vintenatural',
      subItems: [
        { 
          icon: 'info', 
          label: 'Sobre', 
          route: 'sobre' 
        },
        { 
          icon: 'hiking', 
          label: 'Campanhas', 
          route: 'campanhas' 
        },
        { 
          icon: 'forest', 
          label: 'One Shots', 
          route: 'oneshots' 
        },
        { 
          icon: 'table_chart', 
          label: 'A Tabela', 
          route: 'tabela' 
        }
      ]
    },
    { 
      icon: 'menu_book', 
      label: 'Outras Séries', 
      route: 'outras',
      subItems: [
        { 
          icon: 'info', 
          label: 'Sobre', 
          route: 'sobre' 
        },
        { 
          icon: 'book_5', 
          label: 'HQuê?', 
          route: 'hque' 
        },
        { 
          icon: 'emoji_food_beverage', 
          label: 'Cháverna', 
          route: 'chaverna' 
        },
        { 
          icon: 'chair', 
          label: 'Lives de Conversa', 
          route: 'livesconversa'
        }
      ]
    },      
    { 
      icon: 'open_in_new', 
      label: 'Links Externos', 
      route: 'externallink',
      subItems: [
        { 
          icon: 'video_library', 
          label: 'YouTube', 
          route: 'youtube' 
        },
        { 
          icon: 'live_tv', 
          label: 'Twitch', 
          route: 'twitch' 
        },
        { 
          icon: 'photo_library', 
          label: 'Instagram', 
          route: 'instagram' 
        }
      ]
    }
  ]);

}

