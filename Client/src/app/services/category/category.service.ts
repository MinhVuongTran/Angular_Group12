import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/categories`);
  }
  getCategoryById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/categories/${id}`);
  }
  handleAddAndUpdateCategory(
    category: any,
    id?: string | number
  ): Observable<any> {
    if (id) {
      console.log(1);

      return this.http.put<any>(
        `http://localhost:8080/api/categories/${id}`,
        category
      );
    } else {
      console.log(2);

      return this.http.post<any>(
        `http://localhost:8080/api/categories`,
        category
      );
    }
  }
  updateSubCategory(subCategory: any, id: string | number): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/api/subCategories/${id}`,
      subCategory
    );
  }
  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<any>(`http://localhost:8080/api/categories/${id}`);
  }
}
