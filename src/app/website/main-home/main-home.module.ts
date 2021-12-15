import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    SharedModule
  ]
})
export class MainHomeModule { }
