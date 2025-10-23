import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';

export interface Character {
  name: string;
  ancestry: string;
  pronouns: string;
  class: string;
  status: string;
}

const ELEMENT_DATA: Character[] = [
  { name: 'Aria Windrider', ancestry: 'Elf', pronouns: 'She/Her', class: 'Ranger', status: 'Alive' },
  { name: 'Borin Stonehelm', ancestry: 'Dwarf', pronouns: 'He/Him', class: 'Warrior', status: 'Dead' },
  { name: 'Liora Moonshadow', ancestry: 'Human', pronouns: 'They/Them', class: 'Mage', status: 'Alive' },
  { name: 'Thalor Brightblade', ancestry: 'Elf', pronouns: 'He/Him', class: 'Paladin', status: 'Alive' },
  { name: 'Mira Swiftfoot', ancestry: 'Halfling', pronouns: 'She/Her', class: 'Rogue', status: 'Dead' },
  { name: 'Drogath Ironfist', ancestry: 'Orc', pronouns: 'He/Him', class: 'Berserker', status: 'Alive' },
  { name: 'Elara Dawnstar', ancestry: 'Human', pronouns: 'She/Her', class: 'Cleric', status: 'Alive' },
  { name: 'Gorak Bloodfang', ancestry: 'Orc', pronouns: 'He/Him', class: 'Shaman', status: 'Dead' },
  { name: 'Sylva Leafwhisper', ancestry: 'Elf', pronouns: 'They/Them', class: 'Druid', status: 'Unknown' },
  { name: 'Thorin Oakenshield', ancestry: 'Dwarf', pronouns: 'He/Him', class: 'Warrior', status: 'Alive' },
  { name: 'Fiona Lightbringer', ancestry: 'Human', pronouns: 'She/Her', class: 'Paladin', status: 'Dead' },
  { name: 'Kara Nightshade', ancestry: 'Halfling', pronouns: 'They/Them', class: 'Rogue', status: 'Alive' },
  { name: 'Zara Stormcaller', ancestry: 'Elf', pronouns: 'She/Her', class: 'Mage', status: 'Unknown' },
];

@Component({
  selector: 'app-tabela-de-personagens',
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
  ],
  templateUrl: './tabela-de-personagens.html',
  styleUrl: './tabela-de-personagens.css'
})

export class TabelaDePersonagens implements AfterViewInit {
  displayedColumns: string[] = ['name', 'ancestry', 'pronouns', 'class', 'status', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  selectedAncestry: string[] = [];
  globalFilter: string = '';

  get ancestries(): string[] {
    const ancestrySet = new Set(ELEMENT_DATA.map(element => element.ancestry));
    return Array.from(ancestrySet).sort();
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: Character, filter: string): boolean => {
      const parsedFilter = JSON.parse(filter);
      const filterText = parsedFilter.global.toLowerCase();

      const matchesText =
        data.name.toLowerCase().includes(filterText) ||
        data.ancestry.toLowerCase().includes(filterText) ||
        data.pronouns.toLowerCase().includes(filterText) ||
        data.class.toLowerCase().includes(filterText) ||
        data.status.toLowerCase().includes(filterText);

      const matchesAncestry = parsedFilter.ancestries.length === 0 || parsedFilter.ancestries.includes(data.ancestry);

      return matchesText && matchesAncestry;
    };
  }

  applyFilter(event: Event) {
    this.globalFilter = (event.target as HTMLInputElement).value;
    this.applyCombinedFilter();
  }

  filterByAncestries() {
    this.applyCombinedFilter();
  }

  remove(ancestry: string) {
    this.selectedAncestry = this.selectedAncestry.filter(t => t !== ancestry);
    this.applyCombinedFilter();
  }


  applyCombinedFilter() {
    const filter = {
      global: this.globalFilter.trim().toLowerCase(),
      ancestries: this.selectedAncestry
    };

    this.dataSource.filter = JSON.stringify(filter);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addCharacter() {
    // Implement navigation to character creation
    alert('Navigating to add character page');
  }

  editCharacter(character: Character) {
    // Implement navigation to character detail edit
    alert(`Editing character: ${character.name}`);
  }

  deleteCharacter(character: Character) {
    // Implement character deletion logic
    alert(`Deleting character: ${character.name}`);
  }
}