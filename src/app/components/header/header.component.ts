import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
          { label: 'Movies', icon: 'pi pi-fw pi-calendar', routerLink: ['/movies']},
          { label: 'Login', icon: 'pi pi-fw pi-pencil' },
          { label: 'Cadastro', icon: 'pi pi-fw pi-file' },
          { label: 'Sobre', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
  }
}
