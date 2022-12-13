import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  varString: string = "Meu nome";
  user: any = {
    nome: "Rodrigo",
    idade: 27,
    email: "rodrigo123@uol.com"
  };
  value2: number = 12345.85;
  dateToday: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
