import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { faAdd , faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  faAdd=faAdd
  faPen=faPen
  faTrash=faTrash

  product! : Product

  products! : Product[]

  constructor(public _service: ProductService){}

  ngOnInit(): void {
    this._service.getProductsList().subscribe(result => this.products=result)
  }

  searchProduct(prod: string){
    this._service.getProductsByName(prod).subscribe(res => this.products=res)
  }
  
  delete(id: number){
    this._service.deleteProduct(id).subscribe(res => this.ngOnInit())
  }

  send(prod: Product){
    this.product=prod
  }
}
