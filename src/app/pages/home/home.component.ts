import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filmes: any = [
    {
      id: 1,
      nome: "Transformers",
      diretor: "Michel Bay",
      data: "18 de julho de 2007",
      nota: 2
    },
    {
      id: 2,
      nome: "Doutor Estranho no multiverso da loucura",
      diretor: "Sam Raimi",
      data: "5 de maio de 20022",
      nota: 5
    },
    {
      id: 3,
      nome: "Adão negro",
      diretor: "Jaume Collet-Serra",
      data: "20 de outubro de 2022",
      nota: 1
    },
    {
      id: 4,
      nome: "Psicopata americano",
      diretor: "Mary Harron",
      data: "15 de dezembro de 2000",
      nota: 4
    },
    {
      id: 5,
      nome: "Não! Não olhe!",
      diretor: "Jordan Peele",
      data: "25 de agosto de 2022",
      nota: 5
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
