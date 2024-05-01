import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { MoviesService } from '../../../../services/movies';
import { MovieGet } from '../movies.interface';

@Component({
  selector: 'app-movie-get',
  templateUrl: './movie-get.component.html',
  styleUrl: './movie-get.component.css',
  providers: [MessageService]
})
export class MovieGetComponent implements OnInit {
  movies$: Observable<any>;
  movies: MovieGet[] = [];
  isLoading: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.movies$ = new Observable<any[]>();
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movies$ = this.moviesService.getMovies();
      this.movies$.subscribe({
        next: (data) => {
          this.movies = data;
          this.isLoading = false;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Filmes carregados com sucesso!'})
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao carregar filmes!'})
        }
      })
  }
}
