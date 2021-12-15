import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreEntradaRoutingModule } from './pre-entrada-routing.module';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PreEntradaRoutingModule
  ]
})
export class PreEntradaModule { }
