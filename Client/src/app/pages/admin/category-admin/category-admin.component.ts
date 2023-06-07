import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss'],
})
export class CategoryAdminComponent implements OnInit {
  files!: TreeNode[];

  cols!: any[];

  dialog!: boolean;

  category: any = {};

  constructor(
    private categoryService: CategoryService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getCategory();
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'slug', header: 'Slug' },
    ];
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(({ data }) => {
      this.files = data.map((cateItem: any) => {
        return {
          data: {
            id: cateItem._id,
            name: cateItem.name,
            slug: cateItem.slug,
          },
          children: cateItem.subCategories.map((subItem: any) => {
            return {
              data: {
                id: subItem._id,
                name: subItem.name,
                categoryId: cateItem._id,
                slug: subItem.slug,
              },
            };
          }),
        };
      });
    });
  }

  openNew() {
    this.dialog = true;
  }

  hideDialog() {
    this.dialog = false;
  }

  editCategory(rowNode: any) {
    if (rowNode.parent && rowNode.parent.expanded) {
      this.category = { ...rowNode.node.data, level: rowNode.level };
    } else {
      this.category = { ...rowNode.node.data, level: rowNode.level };
    }

    this.dialog = true;
  }

  saveCategory(category: any) {
    const { id, level, slug, ...data } = category;

    if (level === 0) {
      this.categoryService.handleAddAndUpdateCategory(data, id).subscribe(
        (response) => {
          this.hideDialog();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: response.message,
            life: 3000,
          });
          this.getCategory();
        },
        (error) => {}
      );
    } else {
      this.categoryService.updateSubCategory(data, id).subscribe(
        (response) => {
          console.log(response);
          this.hideDialog();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: response.message,
            life: 3000,
          });
          this.getCategory();
        },
        (error) => {}
      );
    }
  }
}
