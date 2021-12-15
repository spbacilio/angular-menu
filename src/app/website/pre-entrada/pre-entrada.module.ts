import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PreEntradaRoutingModule } from './pre-entrada-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { PreEntradasComponent } from './pages/pre-entradas/pre-entradas.component';


@NgModule({
  declarations: [
    PreEntradasComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PreEntradaRoutingModule,
    SharedModule
  ]
})
export class PreEntradaModule { }
