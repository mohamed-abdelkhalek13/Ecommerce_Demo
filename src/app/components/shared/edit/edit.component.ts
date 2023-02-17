import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogueService } from 'src/app/services/dialogue.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private service: ProductsService, private dialogue: DialogueService){}

  ngOnInit(){
    this.product = this.service.getProductById(this.data.id)
  }
  editProduct(product:any){
    this.service.updateProduct(product)
    }
}
