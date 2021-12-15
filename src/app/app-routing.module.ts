import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/main-home/main-home.module').then(m => m.MainHomeModule)
  },
  {
    path: 'pre-entrada',
    loadChildren: () => import('./website/pre-entrada/pre-entrada.module').then(m => m.PreEntradaModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
