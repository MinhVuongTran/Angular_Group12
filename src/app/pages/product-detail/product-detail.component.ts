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
  images: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    public dialogService: DialogService
  ) {}
  productId!: number;
  products: Product[] = [];
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
        colors: [
          'assets/colors1.webp',
          'assets/colors2.jpg',
          'assets/colors3.png',
          'assets/colors4.jpg',
        ],
        infors: 
          {
            id: 1,
            colors: 'Trắng',
            material: 'Cotton',
            style: 'oversize',
            desc: 'Tình bạn là một loại tình cảm rất là đặc biệt và ai ai trong chúng ta cũng phải có ít nhất một người bạn để có thể cùng nhau san sẻ, dỗ dành cho ta khi lúc ta buồn, hòa nhập với chúng ta khi ta với và nếu có cơ hội tôi mong rằng sẽ gặp lại nhau. Chất liệu nhẹ và thoáng mát tạo cho người mặc cảm giác thoáng mát trong những ngày thời tiết nóng bức. Phom áo rộng rãi mang lại cảm giác thoải mái cho mỗi chuyển động. ',
            infoImage: 'assets/somi_nam_size.jpg',
          },
        
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
        colors: [
          'assets/colors1.webp',
          'assets/colors2.jpg',
          'assets/colors3.png',
          'assets/colors4.jpg',
        ],
        infors: 
          {
            id: 2,
            colors: 'Trắng',
            material: 'Cotton',
            style: 'oversize',
            desc: 'Tình bạn là một loại tình cảm rất là đặc biệt và ai ai trong chúng ta cũng phải có ít nhất một người bạn để có thể cùng nhau san sẻ, dỗ dành cho ta khi lúc ta buồn, hòa nhập với chúng ta khi ta với và nếu có cơ hội tôi mong rằng sẽ gặp lại nhau. Chất liệu nhẹ và thoáng mát tạo cho người mặc cảm giác thoáng mát trong những ngày thời tiết nóng bức. Phom áo rộng rãi mang lại cảm giác thoải mái cho mỗi chuyển động. ',
            infoImage: 'assets/somi_nam_size.jpg',
          },
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
        colors: [
          'assets/colors1.webp',
          'assets/colors2.jpg',
          'assets/colors3.png',
          'assets/colors4.jpg',
        ],
        infors: 
          {
            id: 3,
            colors: 'Trắng',
            material: 'Cotton',
            style: 'oversize',
            desc: 'Tình bạn là một loại tình cảm rất là đặc biệt và ai ai trong chúng ta cũng phải có ít nhất một người bạn để có thể cùng nhau san sẻ, dỗ dành cho ta khi lúc ta buồn, hòa nhập với chúng ta khi ta với và nếu có cơ hội tôi mong rằng sẽ gặp lại nhau. Chất liệu nhẹ và thoáng mát tạo cho người mặc cảm giác thoáng mát trong những ngày thời tiết nóng bức. Phom áo rộng rãi mang lại cảm giác thoải mái cho mỗi chuyển động. ',
            infoImage: 'assets/somi_nam_size.jpg',
          },
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
        colors: [
          'assets/colors1.webp',
          'assets/colors2.jpg',
          'assets/colors3.png',
          'assets/colors4.jpg',
        ],
        infors: 
          {
            id: 4,
            colors: 'Trắng',
            material: 'Cotton',
            style: 'oversize',
            desc: 'Tình bạn là một loại tình cảm rất là đặc biệt và ai ai trong chúng ta cũng phải có ít nhất một người bạn để có thể cùng nhau san sẻ, dỗ dành cho ta khi lúc ta buồn, hòa nhập với chúng ta khi ta với và nếu có cơ hội tôi mong rằng sẽ gặp lại nhau. Chất liệu nhẹ và thoáng mát tạo cho người mặc cảm giác thoáng mát trong những ngày thời tiết nóng bức. Phom áo rộng rãi mang lại cảm giác thoải mái cho mỗi chuyển động. ',
            infoImage: 'assets/somi_nam_size.jpg',
          },
      },
    ];
  }
}
