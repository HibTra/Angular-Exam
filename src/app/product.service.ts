import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  showAddModal = false
  showUpdateModal = false

  getProductsList():Observable<Product[]>{
    return this._http.get<Product[]>("http://localhost:3000/products")
  }

  getProductsByName(searchText:string):Observable<Product[]>{
    return this._http.get<Product[]>("http://localhost:3000/products").pipe(
      map(products => products.filter(product => product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
    )
  }

  getProductById(id:number):Observable<Product>{
    return this._http.get<Product>(`http://localhost:3000/products/${id}`)
  }

  addProduct(product:Product):Observable<Product[]>{
    return this._http.post<Product[]>("http://localhost:3000/products", product)
  }

  deleteProduct(id:number):Observable<Product[]>{
    return this._http.delete<Product[]>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(id: number, product:Product):Observable<Product>{
    return this._http.put<Product>(`http://localhost:3000/products/${id}`, product)
  }
}
