import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide11',
  templateUrl: './slide11.component.html',
  styleUrls: ['./slide11.component.css']
})
export class Slide11Component implements OnInit {
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
