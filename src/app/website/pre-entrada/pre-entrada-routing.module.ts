import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PreEntradasComponent } from './pages/pre-entradas/pre-entradas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'pre-entradas',
        pathMatch: 'full'
      },
      {
        path: 'pre-entradas',
        component: PreEntradasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreEntradaRoutingModule { }
