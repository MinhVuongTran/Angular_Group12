import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  product: any[] = [];

  items: MenuItem[] = [];
  userItems: MenuItem[] = [];

  customers: any[] = [];

  dialogVisible: boolean = false;

  totalItems: number = 0;
  totalAmount: number = 0;

  constructor(
    private categoryService: CategoryService,
    private cartService: CartService
  ) {
    this.categoryService.getCategory().subscribe(({ data }) => {
      const temp = data.map((menu: any) => {
        const itemsTemp = menu.subCategories.map((item: any) => {
          return {
            label: item.name,
            routerLink: '/products/' + menu.slug + '/' + item.slug,
          };
        });
        return {
          label: menu.name,
          items: itemsTemp,
        };
      });
      this.product.push(...temp);
    });
  }

  showDialog() {
    this.dialogVisible = true;
  }

  removeProduct(productId: string): void {
    this.cartService.removeItemById(productId);
    this.customers = this.cartService.getCartItems();
    this.totalItems = this.cartService.updateCartTotal();

    this.totalAmount = this.cartService.getTotalAmount();
  }

  ngOnInit() {
    this.customers = this.cartService.getCartItems();
    this.totalItems = this.cartService.updateCartTotal();

    this.totalAmount = this.cartService.getTotalAmount();

    this.items = [
      {
        label: 'NEW ARRIVALS',
        routerLink: '/products',
      },
      {
        label: 'SẢN PHẨM',
        items: this.product,
      },
      {
        label: 'ABOUT',
        routerLink: '/about',
      },
      {
        label: 'CONTACT',
        routerLink: '/contact',
      },
    ];

    this.userItems = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
