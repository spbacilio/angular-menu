import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { InspeccionRoutingModule } from './inspeccion-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { InspeccionesComponent } from './pages/inspecciones/inspecciones.component';


@NgModule({
  declarations: [
    LayoutComponent,
    InspeccionesComponent
  ],
  imports: [
    CommonModule,
    InspeccionRoutingModule,
    SharedModule
  ]
})
export class InspeccionModule { }
