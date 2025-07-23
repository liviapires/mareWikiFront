import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-tabela-de-personagens',
  imports: [
    MatTableModule
  ],
  templateUrl: './tabela-de-personagens.html',
  styleUrl: './tabela-de-personagens.css'
})
export class TabelaDePersonagens {
  personagens = [
    { 
      nome: 'Personagem 1', 
      idade: 30, classe: 'Guerreiro' 
    },
    { 
      nome: 'Personagem 2', 
      idade: 25, classe: 'Mago' 
    },
    { 
      nome: 'Personagem 3', 
      idade: 28, classe: 'Arqueiro' 
    }
  ];

  displayedColumns: string[] = ['nome', 'idade', 'classe'];
}
