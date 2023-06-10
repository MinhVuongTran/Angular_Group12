import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from 'src/app/services/admin-layout/adminLayout.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css'],
})
export class MenuAdminComponent implements OnInit {
  models: any[] = [];

  constructor(public adminLayoutService: AdminLayoutService) {}

  ngOnInit() {
    this.models = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'fa fa-home',
            routerLink: ['/admin'],
          },
        ],
      },
      {
        label: 'CRUD',
        items: [
          {
            label: 'Category',
            icon: 'fa fa-tags',
            routerLink: ['/admin/category'],
          },
          {
            label: 'Product',
            icon: 'fa fa-shopping-bag',
            routerLink: ['/admin/product'],
          },
          {
            label: 'user',
            icon: 'fa fa-users',
            routerLink: ['/admin/user'],
          },
        ],
      },
    ];
  }
}
