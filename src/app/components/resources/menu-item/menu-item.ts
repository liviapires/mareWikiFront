import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MenuItems } from '../sidenav/sidenav';

@Component({
  selector: 'app-menu-item',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {
  item = input.required<MenuItems>();

  collapsed = signal(false);

  nestedMenuOpen = signal(false);

  toggleNestedMenu() {
    if (!this.item().subItems) {
      return;
    } else {
      this.nestedMenuOpen.set(!this.nestedMenuOpen());
    }

  }
}
