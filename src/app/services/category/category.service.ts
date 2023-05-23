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
  addCategory(product: Category): Observable<Category> {
    return this.http.post<Category>(
      `http://localhost:8080/api/categories`,
      product
    );
  }
  updateProduct(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `http://localhost:8080/api/categories/${category._id}`,
      category
    );
  }
  deleteProduct(id: number): Observable<Category> {
    return this.http.delete<Category>(
      `http://localhost:8080/api/Category/${id}`
    );
  }
}
