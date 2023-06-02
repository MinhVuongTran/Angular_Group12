import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  SelectItemGroup,
} from 'primeng/api';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ProductAdminComponent implements OnInit {
  products!: Product[];
  categories: any[] = [];
  productDialog!: boolean;
  product: any;
  submitted!: boolean;

  groupedCategories: SelectItemGroup[] = [];
  selectedCategory: string = '';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.getProduct();
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data.data;

      this.groupedCategories = this.categories.map((cate, index) => {
        return {
          label: cate.name,
          value: cate._id,
          items: this.categories[index].subCategories.map((subCate: any) => {
            return {
              label: subCate.name,
              value: subCate._id,
            };
          }),
        };
      });
    });
  }

  getProduct() {
    return this.productService.getProducts().subscribe((data) => {
      this.products = data.data;
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
    for (const category of this.groupedCategories) {
      for (const item of category.items) {
        if (item.value === this.product._id) {
          this.selectedCategory = item.value;
          console.log(this.selectedCategory);
          return;
        }
      }
    }
  }
  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.deleteProduct(product._id).subscribe(
          (response: any) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: response.message,
              life: 3000,
            });
            this.getProduct();
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: error.error.message,
              life: 3000,
            });
          }
        );
      },
    });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  saveProduct(product: Product) {
    let temp = {
      categoryId: '',
      subCategoryId: '',
    };
    this.groupedCategories.forEach((group) => {
      const item = group.items.filter(
        (item) => item.value === this.selectedCategory
      );
      if (item.length > 0) {
        temp.categoryId = group.value;
        temp.subCategoryId = this.selectedCategory;
        return;
      }
    });
    const { _id, ...data } = Object.assign({}, product, temp);
    const productUpdate = { ...data };

    this.productService.updateProduct(productUpdate, _id).subscribe(
      (response: any) => {
        this.hideDialog();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: response.message,
          life: 3000,
        });
        this.getProduct();
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.message,
          life: 3000,
        });
      }
    );
  }
}
