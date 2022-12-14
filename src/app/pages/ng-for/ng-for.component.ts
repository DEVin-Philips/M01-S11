import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  compras: any = [
    {
      nome:"Sabonete",
      valor: 12.00
    },
    {
      nome:"Pão",
      valor: 10.00
    },
    {
      nome:"Ovo",
      valor: 30.00
    }
  ]; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
