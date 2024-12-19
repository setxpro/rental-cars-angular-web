import { Component } from '@angular/core';
import { TitleContentComponent } from '../../shared/components/title-content/title-content.component';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [TitleContentComponent],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.scss'
})
export class RentComponent {
  title: string = 'Alugueis';
  subtitle: string = 'Preencha o filtro para realizar uma pesquisa.';
}
