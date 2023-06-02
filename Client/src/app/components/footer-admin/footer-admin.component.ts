import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from 'src/app/services/admin-layout/adminLayout.service';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.css'],
})
export class FooterAdminComponent implements OnInit {
  constructor(public adminLayoutService: AdminLayoutService) {}

  ngOnInit() {}
}
