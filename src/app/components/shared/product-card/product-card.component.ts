import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CartProductService } from 'src/app/services/cart-product.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input() products: any[] =[];
  private service:CartProductService;
  constructor(service: CartProductService){
    this.service = service
  }
  sendProduct(product:any){
    let adjustedProduct = {id: product.id, title: product.title, price: product.price, thumbnail: product.thumbnail, quantity:1}
    this.service.setProduct(adjustedProduct)
  }
}
