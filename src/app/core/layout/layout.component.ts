import { Router, RouterOutlet } from '@angular/router';
import { TOOGLE_SIDEBAR } from './layout.animation';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../template/header/header.component';
import { SideMenuComponent } from '../template/side-menu/side-menu.component';
import { FooterComponent } from '../template/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    RouterOutlet,
    ToastModule,
    ConfirmDialogModule,
    BreadcrumbModule,
  ],
  providers: [MessageService, ConfirmationService],
  animations: [TOOGLE_SIDEBAR],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  items!: MenuItem[];

  breadcumbs: MenuItem[] = [{ label: 'Pagina Inicial' }];

  breadcumbsHome!: MenuItem;

  router = inject(Router);

  ngOnInit(): void {
    this.items = [
      {
        label: 'Alugueis',
        icon: 'fa fa-car fa-lg',
        command: () => {
          this.router.navigate(['/rent'])
          this.breadcumbs = [{ label: 'Alugueis' }]
        },
      },
      {
        label: 'Relatórios',
        icon: 'fa fa-file fa-lg',
        command: () => {
          this.router.navigate(['/relatory'])
          this.breadcumbs = [{ label: 'Relatórios' }]
        },
      }
    ];
  }

  isOpenMenu: boolean = true;

  exibirMenu(value: boolean) {
    this.isOpenMenu = value;
  }

  hasOpen(): string {
    return this.isOpenMenu ? 'open' : 'closed';
  }
}
