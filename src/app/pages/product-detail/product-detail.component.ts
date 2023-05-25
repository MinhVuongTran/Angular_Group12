import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  image: any;

  constructor(
    private route: ActivatedRoute,
    public dialogService: DialogService,
    private productService: ProductService
  ) {}
  product: any = {};
  similar_products: Product[] = [];
  similar_products_thumb: any;
  id: any;
  selectedImage: any;

  displayDialog: boolean = false;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  showImage(image: string) {
    this.selectedImage = image;
    this.displayDialog = true;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.productService.getProductsById(this.id).subscribe(
      ({ data }) => {
        this.product = data;
        this.productService.getProducts().subscribe(({ data }) => {
          this.similar_products = data.filter(
            (item: any) =>
              item.subCategoryId._id === this.product.subCategoryId &&
              item._id !== this.product._id
          );
          this.similar_products_thumb = this.similar_products.map(
            (item) => item.images[0]
          );
        });
      },
      (error) => console.log(error.message)
    );
  }
}
