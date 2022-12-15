import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide13',
  templateUrl: './slide13.component.html',
  styleUrls: ['./slide13.component.css'],
})
export class Slide13Component implements OnInit {
  arrayGeneros: any = [
    'Comédia', 
    'Terror', 
    'Ação', 
    'Drama'
  ];

  selecionado:string = "";

  constructor() {}

  ngOnInit(): void {}
}
