import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieCreateComponent } from './components/movies/movie-create/movie-create.component';
import { MovieGetComponent } from './components/movies/movie-get/movie-get.component';
import { MovieUpdateComponent } from './components/movies/movie-update/movie-update.component';
import { UserRegisterGetComponent } from './components/user/user-register/user-register-get/user-register-get.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MovieGetComponent,
  },
  {
    path: 'movies/create',
    component: MovieCreateComponent,
  },
  {
    path: 'movies/edit/:id',
    component: MovieUpdateComponent,
  },
  {
    path: 'user/register',
    component: UserRegisterGetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
