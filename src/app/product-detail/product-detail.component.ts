import { Component } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product!: Product

  id!: number

  constructor(private route: ActivatedRoute, private _service: ProductService){}

  ngOnInit(){
    this.route.params.subscribe(params=> this.id=params['id'])
    this._service.getProductById(this.id).subscribe(res => this.product=res)

  }

}
