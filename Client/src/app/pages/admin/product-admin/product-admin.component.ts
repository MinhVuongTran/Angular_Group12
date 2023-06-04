import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  SelectItemGroup,
} from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UploadImageServiceService } from 'src/app/services/uploadImages/uploadImageService.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ProductAdminComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload!: FileUpload;
  @ViewChild('inputColor') inputColor!: ElementRef;
  @ViewChild('inputMaterial') inputMaterial!: ElementRef;
  @ViewChild('inputStyle') inputStyle!: ElementRef;
  @ViewChild('inputDesc') inputDesc!: ElementRef;

  products!: Product[];
  categories: any[] = [];
  productDialog!: boolean;
  product: any;
  submitted!: boolean;

  groupedCategories: SelectItemGroup[] = [];
  selectedCategory: string = '';
  loadingVisible: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private uploadImageService: UploadImageServiceService
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

  async onBeforeUpload(event?: any) {
    const fileList: File[] = this.fileUpload.files;
    const convertFiles = [];
    for (let file of fileList) {
      convertFiles.push(file);
    }
    try {
      const response = this.uploadImageService
        .uploadImage(convertFiles)
        .toPromise();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  saveProduct(product: Product) {
    this.submitted = true;
    this.loadingVisible = true;
    if (this.fileUpload.files && this.fileUpload.files.length > 0) {
      this.onBeforeUpload()
        .then((response) => response.urls)
        .then((urls: any[]) => {
          // Handle urls upload images
          const base_url = urls[0];
          const images = [
            {
              base_url: base_url.url,
              another_url: urls.map((url) => url.url),
            },
          ];

          // Handle cate and subCate
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

          // Handle infos
          const infos = [
            {
              color: this.inputColor.nativeElement.value,
              material: this.inputMaterial.nativeElement.value,
              style: this.inputStyle.nativeElement.value,
              desc: this.inputDesc.nativeElement.value,
            },
          ];

          const { _id, ...data } = Object.assign({}, product, temp);
          const productData = { ...data, images, infos };
          console.log(productData);

          this.productService
            .handleAddAndUpdateProduct(productData, _id)
            .subscribe(
              (response: any) => {
                this.submitted = false;
                this.loadingVisible = false;
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
                this.submitted = false;
                this.loadingVisible = false;
                console.log(error);

                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: error.error.message,
                  life: 3000,
                });
              }
            );
        });
    } else {
      this.submitted = false;
      this.loadingVisible = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Choose image',
        life: 3000,
      });
    }
  }
}
