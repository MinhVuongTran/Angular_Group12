import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { DialogService } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  images : any[] =[];
  constructor(private route: ActivatedRoute,public dialogService: DialogService) {}
  productId!: number;
  products: Product[] = [];
  selectedImage: any;

  displayDialog: boolean = false;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  showImage(image: string) {
    this.selectedImage = image;
    this.displayDialog = true;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
    });
    console.log(this.productId);
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        imgUrl: 'assets/20230407_Zvdaiq3jv7.jpeg',
        images: [
          'assets/20230407_Zvdaiq3jv7.jpeg',
          'assets/20230407_Zvdaiq3jv7.jpeg',
          'assets/20230407_Zvdaiq3jv7.jpeg',
        ],
      },
      {
        id: 2,
        name: 'Product 2',
        price: 19.99,
        imgUrl: 'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
        images: [
          'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
          'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
          'assets/20230304_JEJcTXpYnx8vqYyg.jpeg',
        ],
      },
      {
        id: 3,
        name: 'Product 3',
        price: 7.99,
        imgUrl: 'assets/20230410_RbE74WPNWx.webp',
        images: [
          'assets/20230410_RbE74WPNWx.webp',
          'assets/20230410_RbE74WPNWx.webp',
          'assets/20230410_RbE74WPNWx.webp',
        ],
      },
      {
        id: '4',
        name: 'Product 4',
        price: 23.4,
        imgUrl: 'assets/20230410_x3FbZdnooR.jpeg',
        images: [
          'assets/20230410_x3FbZdnooR.jpeg',
          'assets/20230410_x3FbZdnooR.jpeg',
          'assets/20230410_x3FbZdnooR.jpeg',
        ],
      },
    ];
  }
}
