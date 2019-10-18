import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/api/products');
  }

  createProduct(data) {
    return this.http.post('/api/products/new', data);
  }

  getById(id) {
    return this.http.get(`/api/show/${id}`);
  }

  updateById(product) {
    return this.http.put(`api/${product._id}/edit`, product);
  }

  deleteById(id) {
    return this.http.delete(`/api/products/${id}`);
  }
}