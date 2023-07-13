import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  images: any;
  currentPage: number = 1;
  currentProducts: Product[] = [];
  rows: number = 4;

  private categorySlug!: string | null;
  private routeSub!: Subscription | null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.rows = event.rows;

    const startIndex = this.currentPage * this.rows - this.rows;

    this.currentProducts = this.products.slice(
      startIndex,
      startIndex + this.rows
    );
    this.images = this.currentProducts.map((item: any) => item.images);
  }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
      // Lấy giá trị slug từ URL
      this.categorySlug = params.get('subCategorySlug');
      if (this.categorySlug) {
        console.log(this.categorySlug);

        // Gọi phương thức cập nhật danh sách sản phẩm dựa trên categorySlug
        this.updateProductList(this.categorySlug);
      } else {
        this.productService.getProducts().subscribe(
          ({ data }) => {
            this.products = data;
            this.currentProducts = this.products.slice(
              this.currentPage - 1,
              this.rows
            );
            this.images = this.currentProducts.map((item: any) => item.images);
          },
          (error) => console.log(error.message)
        );
      }
    });
  }

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
        this.currentProducts = this.products.slice(
          this.currentPage - 1,
          this.rows
        );
        this.images = data.map((item: any) => item.images);
      },
      (error) => console.log(error.message)
    );
  }
  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
}
