import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reProCate',
  templateUrl: './reProCate.component.html',
  styleUrls: ['./reProCate.component.css'],
})
export class ReProCateComponent implements OnInit {
  constructor() {}
  reProCate: any[] = [];
  ngOnInit() {
    this.reProCate = [
      {
        icon: 'fa-sharp fa-light fa-shirt',
        name: 'ÁO KHOÁC',
        desc: 'Áo khoác thời trang Nam/Nữ',
      },
      {
        icon: 'fa-sharp fa-light fa-shirt',
        name: 'ÁO KHOÁC',
        desc: 'Áo khoác thời trang Nam/Nữ',
      },
      {
        icon: 'fa-sharp fa-light fa-shirt',
        name: 'ÁO KHOÁC',
        desc: 'Áo khoác thời trang Nam/Nữ',
      },
      {
        icon: 'fa-sharp fa-light fa-shirt',
        name: 'ÁO KHOÁC',
        desc: 'Áo khoác thời trang Nam/Nữ',
      },
      {
        icon: 'fa-sharp fa-light fa-shirt',
        name: 'ÁO KHOÁC',
        desc: 'Áo khoác thời trang Nam/Nữ',
      },
      {
        icon: 'fa-sharp fa-light fa-shirt',
        name: 'ÁO KHOÁC',
        desc: 'Áo khoác thời trang Nam/Nữ',
      },
    ];
  }
}
