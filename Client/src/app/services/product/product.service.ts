import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/products`);
  }
  getProductsById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/products/${id}`);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `http://localhost:8080/api/products`,
      product
    );
  }
  handleAddAndUpdateProduct(
    product: any,
    id?: string | number
  ): Observable<Product> {
    if (id) {
      return this.http.put<Product>(
        `http://localhost:8080/api/products/${id}`,
        product
      );
    } else {
      return this.http.post<Product>(
        `http://localhost:8080/api/products`,
        product
      );
    }
  }
  deleteProduct(id: number | string): Observable<Product> {
    return this.http.delete<Product>(
      `http://localhost:8080/api/products/${id}`
    );
  }
}
