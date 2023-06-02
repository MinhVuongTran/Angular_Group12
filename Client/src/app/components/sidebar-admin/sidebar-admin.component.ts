import { AdminLayoutService } from './../../services/admin-layout/adminLayout.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css'],
})
export class SidebarAdminComponent implements OnInit {
  constructor(
    public adminLayoutService: AdminLayoutService,
    public el: ElementRef
  ) {}

  ngOnInit() {}
}
