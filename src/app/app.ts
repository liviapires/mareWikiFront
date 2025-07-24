import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { Logo } from './components/resources/logo/logo';
import { Sidenav } from './components/resources/sidenav/sidenav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    Logo,
    Sidenav
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('front');

  collapsed = signal(true);

  sidenavWidth = computed(() => this.collapsed() ? "3.75rem" : "22rem");

}
