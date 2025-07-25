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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', type: 'Nonmetal' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', type: 'Noble Gas' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', type: 'Alkali Metal' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', type: 'Alkaline Earth Metal' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', type: 'Metalloid' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', type: 'Nonmetal' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', type: 'Nonmetal' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', type: 'Nonmetal' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', type: 'Nonmetal' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', type: 'Noble Gas' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', type: 'Alkali Metal' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', type: 'Alkaline Earth Metal' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', type: 'Post-transition Metal' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', type: 'Metalloid' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', type: 'Nonmetal' },
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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'type'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  selectedTypes: string[] = [];
  globalFilter: string = '';

  get types(): string[] {
    const typesSet = new Set(ELEMENT_DATA.map(element => element.type));
    return Array.from(typesSet).sort();
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string): boolean => {
      const parsedFilter = JSON.parse(filter);
      const filterText = parsedFilter.global.toLowerCase();

      const matchesText =
        data.name.toLowerCase().includes(filterText) ||
        data.symbol.toLowerCase().includes(filterText) ||
        data.type.toLowerCase().includes(filterText) ||
        data.position.toString().includes(filterText) ||
        data.weight.toString().includes(filterText);

      const matchesType = parsedFilter.types.length === 0 || parsedFilter.types.includes(data.type);

      return matchesText && matchesType;
    };
  }

  applyFilter(event: Event) {
    this.globalFilter = (event.target as HTMLInputElement).value;
    this.applyCombinedFilter();
  }

  filterByTypes() {
    this.applyCombinedFilter();
  }

  remove(type: string) {
    this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    this.applyCombinedFilter();
  }


  applyCombinedFilter() {
    const filter = {
      global: this.globalFilter.trim().toLowerCase(),
      types: this.selectedTypes
    };

    this.dataSource.filter = JSON.stringify(filter);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}