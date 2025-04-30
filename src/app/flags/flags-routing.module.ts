import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from './components/info/info.component';
import {ListComponent} from './components/list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlagsRoutingModule { }
