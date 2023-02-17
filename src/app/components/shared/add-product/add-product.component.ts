import { Component } from '@angular/core';
import { DialogueService } from 'src/app/services/dialogue.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(public service: ProductsService){}
  addProduct(product:any){
    this.service.addProduct(product)
  }
}
