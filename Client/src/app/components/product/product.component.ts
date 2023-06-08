import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() products?: Product[];

  images: any;
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
    if (!this.products) {
      this.productService.getProducts().subscribe(
        ({ data }) => {
          this.products = data;

          this.images = data.map((item: any) => item.images);
        },
        (error) => console.log(error.message)
      );
    }
  }
}
