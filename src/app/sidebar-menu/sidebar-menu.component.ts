import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {label: 'Heroes', icon: 'pi pi-fw pi-users', routerLink:'/hero'},
        {label: 'Table', icon: 'pi pi-fw pi-table', routerLink:'/table'}
    ];
  }

}
