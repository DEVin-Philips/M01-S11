import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide09',
  templateUrl: './slide09.component.html',
  styleUrls: ['./slide09.component.css']
})
export class Slide09Component implements OnInit {
  tamanhoFonte: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  verificaBackgroundColor(){
    if(this.tamanhoFonte == 0){
      return 'gray';
    }else if(this.tamanhoFonte > 0){
      return 'orange';
    }else{
      return '';
    }
  }

  verificaBorder(){
    if(this.tamanhoFonte == 0){
      return '2px solid gray';
    }else if(this.tamanhoFonte > 0){
      return '2px solid orange';
    }else{
      return '';
    }
  }
}
