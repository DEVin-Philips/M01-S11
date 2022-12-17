import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

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
      data: "2022-12-15",
      nota: 2
    },
    {
      id: 2,
      nome: "Doutor Estranho no multiverso da loucura",
      diretor: "Sam Raimi",
      data: "2022-12-15",
      nota: 5
    },
    {
      id: 3,
      nome: "Adão negro",
      diretor: "Jaume Collet-Serra",
      data: "2022-12-15",
      nota: 1
    },
    {
      id: 4,
      nome: "Psicopata americano",
      diretor: "Mary Harron",
      data: "2022-12-15",
      nota: 4
    },
    {
      id: 5,
      nome: "Não! Não olhe!",
      diretor: "Jordan Peele",
      data: "2022-12-15",
      nota: 5
    },
  ]
  constructor(private router: Router,
    private movieService: MoviesService, ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('movies')){
      let movies = JSON.stringify(this.filmes);
      localStorage.setItem('movies', movies);
    }else{
      this.filmes = JSON.parse(localStorage.getItem('movies')!);
    }
  }

  editMovie(index: any){
    // o atributo state serve para enviar um dado para outro componente atraves do modulo de rota 
    this.router.navigateByUrl('/create', { state:  this.filmes[index]});
  }

  deleteMovie(index:any){
    this.movieService.delete(index);
    //Chamo de novo para que ele recarregue a listagem
    this.ngOnInit();
  }
}
