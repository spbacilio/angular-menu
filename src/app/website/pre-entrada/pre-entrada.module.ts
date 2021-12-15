import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreEntradaRoutingModule } from './pre-entrada-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { PreEntradasComponent } from './pages/pre-entradas/pre-entradas.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PreEntradasComponent
  ],
  imports: [
    CommonModule,
    PreEntradaRoutingModule
  ]
})
export class PreEntradaModule { }
