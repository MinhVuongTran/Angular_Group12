import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from './../../interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  images: any;
  posts: Post[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  public totalItems: number = 0;

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.totalItems = this.cartService.updateCartTotal();
  }

  ngOnInit() {

    this.productService.getProducts().subscribe(
      ({ data }) => {
        this.products = data;
        console.log(this.products);

        this.images = data.map((item: any) => item.images);
      },
      (error) => console.log(error.message)
    );

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
}
