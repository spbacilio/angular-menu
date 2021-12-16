import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaRoutingModule } from './entrada-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { EntradasComponent } from './pages/entradas/entradas.component';


@NgModule({
  declarations: [
    LayoutComponent,
    EntradasComponent
  ],
  imports: [
    CommonModule,
    EntradaRoutingModule
  ]
})
export class EntradaModule { }
