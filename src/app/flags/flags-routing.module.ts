import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./components/list/list.component').then(m => m.ListComponent)
  },
  {
    path: 'info',
    loadComponent: () => import('./components/info/info.component').then(m => m.InfoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlagsRoutingModule { }
