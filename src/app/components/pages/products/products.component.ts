import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any[] =[];
  filteredProducts: any[] = [];
  constructor(private service: ProductsService){
    this.service = service;
  }
  ngOnInit(){
    this.products =this.service.getAllProducts();
    this.filteredProducts = this.products;
  }
  applyFilter(event:any){
    let inputValue =event.target.value;
    this.filteredProducts = this.products.filter((p:any) => p.description.toLowerCase().includes(inputValue.toLowerCase()))
  }
  getAll(){
    this.filteredProducts = this.products;
  }
  getAsus(){
    this.filteredProducts = this.products.filter((p:any) => p.description.toLowerCase().includes("asus"))
  }
  getHp(){
    this.filteredProducts = this.products.filter((p:any) => p.description.toLowerCase().includes("hp"))
  }
  getMsi(){
    this.filteredProducts = this.products.filter((p:any) => p.description.toLowerCase().includes("msi"))
  }
}
