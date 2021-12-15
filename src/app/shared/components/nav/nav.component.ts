import { Component, OnInit } from '@angular/core';
import { MenuDto } from '../../models/menu-dto.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuList = [] as MenuDto[];

  activeMenu = false;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    this.menuList.push({ moduleUrl: '/pre-entrada/pre-entradas', moduleName: 'PRE ENTRADA' });
    this.menuList.push({ moduleUrl: '/inspeccion/inspecciones', moduleName: 'INSPECCION' });
    this.menuList.push({ moduleUrl: '/entradas/entradas', moduleName: 'ENTRADA' });
  }

  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }

}
