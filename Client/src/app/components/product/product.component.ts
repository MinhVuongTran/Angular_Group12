import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private cartService: CartService) {}

  @Input() product!: Product;
  @Input() base_url!: string;

  totalItems: number = 0;

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.totalItems = this.cartService.updateCartTotal();
  }
}
