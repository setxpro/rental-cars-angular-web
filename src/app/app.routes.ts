import { LayoutComponent } from './core/layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {
                path: '', loadComponent: () => import('./feature/home/home.component').then(component => component.HomeComponent)
            },
            {
                path: 'rent', loadComponent: () => import('./feature/rent/rent.component').then(component => component.RentComponent)
            },
            {
              path: 'relatory', loadComponent: () => import('./feature/relatory/relatory.component').then(component => component.RelatoryComponent)
            }
        ]
    }
];
