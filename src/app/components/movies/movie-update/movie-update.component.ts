import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { MoviesService } from '../../../../services/movies';
import { MovieGet } from '../movies.interface';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrl: './movie-update.component.css',
  providers: [MessageService],
})
export class MovieUpdateComponent implements OnInit {
  movie$: Observable<MovieGet>;
  movie: any = {
    title: '',
    director: '',
    publicationDate: '',
    genre: '',
  };

  movieID: number = 0;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService,
  ) {
    this.movie$ = new Observable<MovieGet>();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieID = params['id'];

      if(this.movieID) {
        this.moviesService.getMovieById(this.movieID).subscribe({
          next: (data) => {
            this.movie.title = data.title;
            this.movie.director = data.director;
            this.movie.publicationDate = new Date(data.publicationDate)
            this.movie.genre = data.genre;
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao carregar filme!'})
          }
        })
      }
    });
  }

  submitForm() {
    this.moviesService.udpateMovies(this.movieID, this.movie).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Filme atualizado com sucesso!'})
        this.router.navigate(['/movies']);
      },
      error: (error) => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao atualizar filme!'})
      }
    });
  }
}
