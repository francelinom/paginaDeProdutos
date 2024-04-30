import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  getId(id: string) {
    return this.httpClient.get<Product>(`/api/products/${id}`);
  }


  post(payload: Product) {
    return this.httpClient.post('/api/products', payload);
  }

  put(id: string, payload: Product) {
    return this.httpClient.put(`/api/products/${id}`, payload);
  }

}
