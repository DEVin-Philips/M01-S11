import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  create(newMovie: any){
    let moviesArray = JSON.parse(localStorage.getItem('movies')!);
    newMovie.id = moviesArray.length +1;
    moviesArray.push(newMovie);

    let moviesString = JSON.stringify(moviesArray);
    localStorage.removeItem('movies');
    localStorage.setItem('movies', moviesString);
  }

  edit(movieEdit: any){
    let moviesArray = JSON.parse(localStorage.getItem('movies')!);
    moviesArray.forEach((movie:any, index: number) => {
      if(movie.id == movieEdit.id){
        moviesArray[index] = movieEdit;
      }
    });

    let moviesString = JSON.stringify(moviesArray);
    localStorage.removeItem('movies');
    localStorage.setItem('movies', moviesString);
  }

  delete(index: number){
    let moviesArray = JSON.parse(localStorage.getItem('movies')!);
    moviesArray.splice(index, 1);

    let moviesString = JSON.stringify(moviesArray);
    localStorage.removeItem('movies');
    localStorage.setItem('movies', moviesString);
  }
}
