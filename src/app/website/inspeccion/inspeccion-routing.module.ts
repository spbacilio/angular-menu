import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../pre-entrada/components/layout/layout.component';
import { InspeccionesComponent } from './pages/inspecciones/inspecciones.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inspecciones',
        pathMatch: 'full'
      },
      {
        path: 'inspecciones',
        component: InspeccionesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspeccionRoutingModule { }
