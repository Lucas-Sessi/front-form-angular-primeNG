import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { MoviesService } from '../../../../services/movies';
import { MovieGet } from '../movies.interface';

@Component({
  selector: 'app-movie-get',
  templateUrl: './movie-get.component.html',
  styleUrl: './movie-get.component.css',
  providers: [MessageService, ConfirmationService]
})
export class MovieGetComponent implements OnInit {
  movies$: Observable<any>;
  movies: MovieGet[] = [];
  isLoading: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
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

  createMovie() {
    this.router.navigate(['/movies/create']);
  }

  editMovie(id: number) {
    this.router.navigate([`/movies/edit/${id}`]);
    
  }

    deleteMovie(id: number, event: Event) {
      this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Você tem certeza que deseja excluir este filme?',
          header: 'Confirmação de Exclusão',
          icon: 'pi pi-info-circle',
          acceptButtonStyleClass:"p-button-danger p-button-text",
          rejectButtonStyleClass:"p-button-text p-button-text",
          acceptIcon:"none",
          rejectIcon:"none",

          accept: () => {
              this.moviesService.deleteMovies(id).subscribe({
                next: () => {
                  this.getMovies();
                  this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Filme deletado com sucesso!' });
                },
                error: (error) => {
                  console.error(error);
                  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao deletar filme!'})
                }
              })
          },
          reject: () => {
              this.getMovies();
          }
      });
  }
}
