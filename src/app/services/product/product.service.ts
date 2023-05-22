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
  getProductsById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/api/products/${id}`);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `http://localhost:8080/api/products`,
      product
    );
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `http://localhost:8080/api/products/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `http://localhost:8080/api/products/${id}`
    );
  }
}
