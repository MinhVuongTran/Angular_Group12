import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Post } from 'src/app/interfaces/post';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

import { Location } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  private routeSub!: Subscription;
  private categorySlug!: string | null;
  products: Product[] = [];
  posts: Post[] = [];
  pathUrl = '';
  images: any;
  productItems: MenuItem[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
      // Lấy giá trị slug từ URL
      this.categorySlug = params.get('subCategorySlug');
      console.log(this.categorySlug);

      // Gọi phương thức cập nhật danh sách sản phẩm dựa trên categorySlug
      this.updateProductList(this.categorySlug);
    });

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     const url = event.url;
    //     this.updateSortItem(url);
    //   }
    // });

    this.productItems = [
      {
        label: 'Bán chạy nhất',
        // routerLink: routerLink,
        routerLink: this.pathUrl,
        queryParams: { sort: 'hot' },
      },
      {
        label: 'Mới nhất',
        // routerLink: routerLink,
        routerLink: this.pathUrl,
        queryParams: { sort: 'desc' },
      },
      {
        label: 'Giá: Cao - Thấp',
        // routerLink: routerLink,
        routerLink: this.pathUrl,
        queryParams: { sort: 'price_desc' },
      },
      {
        label: 'Giá: Thấp - Cao',
        // routerLink: routerLink,
        routerLink: this.pathUrl,
        queryParams: { sort: 'price_asc' },
      },
    ];

    this.posts = [
      {
        _id: '1',
        title: 'ĐA PHONG CÁCH HƠN VỚI CÁC KIỂU ÁO SƠ MI TRENDY NHÀ TOTODAY',
        content: 'Áo sơ mi được xem như biểu tượng đầy lịch lãm',
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
      },
      {
        _id: '2',
        title: 'TOP 5 MẪU ÁO SƠ MI CỰC CHẤT CÙNG FRIENDs “BACK TO UNIVERSITY”',
        content:
          'Mix & match phá cách hơn với mẫu áo sơ mi COLLECT MOMENT cực chất',
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
      },
      {
        _id: '3',
        title: 'TIPS MIX ĐỒ VỚI QUẦN JEAN CỰC CHẤT',
        content:
          'Quần jean được xem như item quốc dân luôn có mặt trong tủ đồ của các tín đồ thời trang. ',
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
      },
    ];
  }
  ngOnDestroy() {
    // Hủy subscription khi component bị hủy
    this.routeSub.unsubscribe();
  }

  updateSortItem(routerLink: string) {}

  updateProductList(categorySlug: string | null) {
    this.productService.getProducts().subscribe(
      ({ data }) => {
        if (categorySlug !== null) {
          this.products = data.filter(
            (item: any) => item.subCategoryId.slug === categorySlug
          );
        } else {
          this.products = data;
        }

        this.images = data.map((item: any) => item.images);
      },
      (error) => console.log(error.message)
    );
  }
}
