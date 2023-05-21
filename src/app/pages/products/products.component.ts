import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { Product } from 'src/app/interfaces/product';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  // countries: any[];
  products: Product[] = [];
  posts: Post[] = [];
  // selectedCity: any;
  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 19.99,
        imgUrl: 'assets/20230407_Zvdaiq3jv7.jpeg',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 7.99,
        imgUrl: 'assets/20230410_RbE74WPNWx.webp',
      },
      {
        id: '4',
        name: 'Product 4',
        price: 23.4,
        imgUrl: 'assets/20230410_x3FbZdnooR.jpeg',
      },
    ];

    this.posts = [
      {
        id: '1',
        title: 'ĐA PHONG CÁCH HƠN VỚI CÁC KIỂU ÁO SƠ MI TRENDY NHÀ TOTODAY',
        content: 'Áo sơ mi được xem như biểu tượng đầy lịch lãm',
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
      },
      {
        id: '2',
        title: 'TOP 5 MẪU ÁO SƠ MI CỰC CHẤT CÙNG FRIENDs “BACK TO UNIVERSITY”',
        content:
          'Mix & match phá cách hơn với mẫu áo sơ mi COLLECT MOMENT cực chất',
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
      },
      {
        id: '3',
        title: 'TIPS MIX ĐỒ VỚI QUẦN JEAN CỰC CHẤT',
        content:
          'Quần jean được xem như item quốc dân luôn có mặt trong tủ đồ của các tín đồ thời trang. ',
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
      },
    ];
  //   this.countries = [
  //     {
  //         name: 'Australia',
  //         code: 'AU',
  //         states: [
  //             {
  //                 name: 'New South Wales',
  //                 cities: [
  //                     { cname: 'Sydney', code: 'A-SY' },
  //                     { cname: 'Newcastle', code: 'A-NE' },
  //                     { cname: 'Wollongong', code: 'A-WO' }
  //                 ]
  //             },
  //             {
  //                 name: 'Queensland',
  //                 cities: [
  //                     { cname: 'Brisbane', code: 'A-BR' },
  //                     { cname: 'Townsville', code: 'A-TO' }
  //                 ]
  //             }
  //         ]
  //     },
  //     {
  //         name: 'Canada',
  //         code: 'CA',
  //         states: [
  //             {
  //                 name: 'Quebec',
  //                 cities: [
  //                     { cname: 'Montreal', code: 'C-MO' },
  //                     { cname: 'Quebec City', code: 'C-QU' }
  //                 ]
  //             },
  //             {
  //                 name: 'Ontario',
  //                 cities: [
  //                     { cname: 'Ottawa', code: 'C-OT' },
  //                     { cname: 'Toronto', code: 'C-TO' }
  //                 ]
  //             }
  //         ]
  //     },
  //     {
  //         name: 'United States',
  //         code: 'US',
  //         states: [
  //             {
  //                 name: 'California',
  //                 cities: [
  //                     { cname: 'Los Angeles', code: 'US-LA' },
  //                     { cname: 'San Diego', code: 'US-SD' },
  //                     { cname: 'San Francisco', code: 'US-SF' }
  //                 ]
  //             },
  //             {
  //                 name: 'Florida',
  //                 cities: [
  //                     { cname: 'Jacksonville', code: 'US-JA' },
  //                     { cname: 'Miami', code: 'US-MI' },
  //                     { cname: 'Tampa', code: 'US-TA' },
  //                     { cname: 'Orlando', code: 'US-OR' }
  //                 ]
  //             },
  //             {
  //                 name: 'Texas',
  //                 cities: [
  //                     { cname: 'Austin', code: 'US-AU' },
  //                     { cname: 'Dallas', code: 'US-DA' },
  //                     { cname: 'Houston', code: 'US-HO' }
  //                 ]
  //             }
  //         ]
  //     }
  // ];
  }
}
