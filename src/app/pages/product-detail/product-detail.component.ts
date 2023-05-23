import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  constructor(private route: ActivatedRoute) {}
  productId!: number;
  products: Product[] = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
    console.log(this.productId);
  }
}
