import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('butaoDarkMode') butaoDarkMode:any;


  constructor() { }

  ngOnInit(): void {
    //Não é apresentado nada pois o template não terminou de ser processado no ngOnInit
    console.log("ngOnInit: ", this.butaoDarkMode);
  }
  
  //Lifecycle Hooks
  //Para mais informações: https://angular.io/guide/lifecycle-hooks
  ngAfterViewInit(){
    // Caso deseja visualizar o que é carregado ao final do carregamento do template
    // declarar no ngAfterViewInit o código
    console.log("ngAfterViewInit: ",this.butaoDarkMode);
  }

  invertColorButton(){
    console.log(this.butaoDarkMode);
    let navbarComponentTag = this.butaoDarkMode.nativeElement.parentElement.parentElement;
    let divParent = navbarComponentTag.parentElement;
    let tableTag = divParent.children[2].firstChild.firstChild;
    
    if(tableTag.className.includes('table-dark')){
      tableTag.className = "table table-striped table-hover";
    }else{
      tableTag.className = "table table-striped table-hover table-dark";
    }
  }

}
