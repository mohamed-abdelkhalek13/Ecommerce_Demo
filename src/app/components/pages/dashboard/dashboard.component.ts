import { Component } from '@angular/core';
import { DialogueService } from 'src/app/services/dialogue.service';
import { ProductsService } from 'src/app/services/products.service';
import { AddProductComponent } from '../../shared/add-product/add-product.component';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';
import { EditComponent } from '../../shared/edit/edit.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products:any[]= [];
  displayedColumns:any;
  constructor(private service:ProductsService, private dialogueService: DialogueService){
    this.service = service;
    this.dialogueService = dialogueService;
  }
  ngOnInit(){
    this.products = this.service.getAllProducts();
    this.displayedColumns =["id","title","description","price", "rating", "brand","screenSize", "color", "batteryLife", "category", "thumbnail", "edit", "remove"]
  }

  openRemoveDialogue(id:any){
    this.dialogueService.openDialogue(ConfirmationComponent).afterClosed().subscribe(res => {
      if(res){
        let newProducts = this.products.filter(p => p.id != id)
        this.service.setProducts(newProducts)
        this.products = this.service.getAllProducts()
      }
    })
  }
  openEditDialog(element:any){
    this.dialogueService.openDialogue(EditComponent, element).afterClosed().subscribe(result => {
      if(result){
          this.products = this.service.getAllProducts()
      }
    })
  }
  openAddDialog(){
    this.dialogueService.openDialogue(AddProductComponent).afterClosed().subscribe(result => {
      if(result){
          this.products = this.service.getAllProducts()
      }
    })
  }
}
