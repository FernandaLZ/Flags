import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'flags/list',
    pathMatch: 'full'
  },
  {
    path: 'flags',
    loadChildren: () => import('./flags/flags.module').then(m => m.FlagsModule)
  }
];
