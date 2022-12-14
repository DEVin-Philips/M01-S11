import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  nome: string = "";
  diretor: string = "";
  dataLancamento: string = "";
  nota: number = 0;
  favorito: string = "";
  boleano: boolean = false;

  filme: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    localStorage.setItem('nome', this.nome);
  }
}
