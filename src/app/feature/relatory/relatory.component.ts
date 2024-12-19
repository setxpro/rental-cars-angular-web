import { Component } from '@angular/core';
import { TitleContentComponent } from '../../shared/components/title-content/title-content.component';

@Component({
  selector: 'app-relatory',
  standalone: true,
  imports: [TitleContentComponent],
  templateUrl: './relatory.component.html',
  styleUrl: './relatory.component.scss'
})
export class RelatoryComponent {
    title: string = 'Relatórios';
    subtitle: string = 'Preencha o filtro para realizar uma pesquisa.';
}
