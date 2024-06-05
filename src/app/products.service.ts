import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient=inject(HttpClient);
  products=[];
  constructor() { }

  getProduct(){
    return this.httpClient.get("http://localhost:3000/products")
  }
}
