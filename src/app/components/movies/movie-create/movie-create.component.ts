import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MoviesService } from '../../../../services/movies';
import { MoviePost } from '../movies.interface';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css',
  providers: [MessageService],
})
export class MovieCreateComponent {
  movies: MoviePost = {
    title: '',
    director: '',
    publicationDate: '',
    genre: ''
  }

  constructor(
    private readonly moviesService: MoviesService,
    private readonly router: Router,
    private messageService: MessageService
  ) {}


  submitForm() {
    this.moviesService.postMovies(this.movies).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Filme cadastrado com sucesso!'})
        this.router.navigate(['/movies']);
      },
      error: (error) => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao cadastrar filme!'})
      }
    })
  }

}
