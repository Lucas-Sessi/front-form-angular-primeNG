import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MovieCreateComponent } from './components/movies/movie-create/movie-create.component';
import { MovieGetComponent } from './components/movies/movie-get/movie-get.component';
import { MovieUpdateComponent } from './components/movies/movie-update/movie-update.component';
import { UserLoginComponent } from './components/user/user-login/user-login/user-login.component';
import { UserRegisterGetComponent } from './components/user/user-register/user-register-get/user-register-get.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieGetComponent,
    HomeComponent,
    MovieCreateComponent,
    MovieUpdateComponent,
    UserRegisterGetComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    ToastModule,
    CardModule,
    ButtonModule,
    FloatLabelModule,
    CalendarModule,
    ConfirmDialogModule,
    PasswordModule,
    ReactiveFormsModule,
    InputMaskModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
