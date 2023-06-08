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
  productData: any;
  images: any;
  submitted!: boolean;
  filesImage: any[] = [];

  groupedCategories: SelectItemGroup[] = [];
  selectedCategory: string = '';
  loadingVisible: boolean = false;
  isUpdate: boolean = true;
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
    this.filesImage = [...this.product.images[0].another_url];

    for (const category of this.groupedCategories) {
      for (const item of category.items) {
        if (item.value === this.product.subCategoryId._id) {
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
    this.isUpdate = false;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
    this.filesImage = [];
    this.isUpdate = true;
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

  handleAddAndUpdateProduct(productData: any, _id?: any) {
    return this.productService
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
  }

  handleData(product: any) {
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
    const images = this.images;
    this.productData = { ...data, images, infos };

    return _id;
  }

  saveProduct(product: Product) {
    this.submitted = true;

    if (this.isUpdate) {
      if (this.fileUpload.files && this.fileUpload.files.length > 0) {
        this.loadingVisible = true;
        this.onBeforeUpload()
          .then((response) => response.urls)
          .then((urls: any[]) => {
            // Handle urls upload images

            const base_url = urls[0];
            this.images = [
              {
                base_url: base_url.url,
                another_url: urls.map((url) => url.url),
              },
            ];
            this.images[0].another_url.push(...this.filesImage);
          })
          .then(() => {
            const _id = this.handleData(product);
            this.handleAddAndUpdateProduct(this.productData, _id);
          });
      } else {
        this.images = [
          {
            base_url: this.filesImage[0],
            another_url: this.filesImage,
          },
        ];
        const _id = this.handleData(product);

        this.handleAddAndUpdateProduct(this.productData, _id);
      }
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

  onDeleteImage(file: string, product: any) {
    const publicId = String(
      file.split('/').pop()?.split('.').slice(0, -1).join('.')
    );
    this.uploadImageService.deleteImage(publicId).subscribe(
      (response) => {
        this.filesImage = this.filesImage.filter(
          (item: string) => !item.includes(publicId)
        );

        this.images = [
          {
            base_url: this.filesImage[0],
            another_url: this.filesImage,
          },
        ];

        const _id = this.handleData(product);

        this.productService
          .handleAddAndUpdateProduct(this.productData, _id)
          .subscribe(
            () => {
              this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: response.message,
                life: 3000,
              });
              this.getProduct();
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
