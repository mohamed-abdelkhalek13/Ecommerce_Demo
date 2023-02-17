import { Injectable } from '@angular/core';
import { DialogueService } from './dialogue.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:  any[]=[]
  constructor(private dialogueService: DialogueService, ) {
  this.products = [
    {
      "id": 1,
      "title": "laptop asus",
      "description": "2022 ASUS 14 Thin Light Business Student Laptop Computer, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 320 GB Storage, 12Hours Battery, Webcam, Zoom Meeting, Win11 + 1 Year Office 365, Black",
      "price": 229,
      "rating": 4.5,
      "brand": "Asus",
      "screenSize": "14 inches",
      "color": "black",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/asus.jpg",
    },
    {
      "id": 2,
      "title": "laptop hp",
      "description": "2021 HP Pavilion 15.6 HD Laptop Computer, Intel Pentium Processor, 8GB RAM, 128GB SSD, HD Webcam, USB-C, HDMI, Ethernet RJ-45, Windows 10 S, Red",
      "price": 350,
      "rating": 4,
      "brand": "Hp",
      "screenSize": "14 inches",
      "color": "red",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/hp.jpg",
    },
    {
      "id": 3,
      "title": "laptop msi ",
      "description": "MSI Modern 15A Thin and Light Daily Laptop: 15.6 FHD 1080p, Intel Core i7-1195G7, Intel Iris Xe, 8GB, 1TB SSD, Win10, Carbon Gray (A11MU-652)",
      "price": 650,
      "rating": 4.5,
      "brand": "Asus",
      "screenSize": "14 inches",
      "color": "black",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/msi.jpg",
    },
    {
      "id": 4,
      "title": "laptop hp",
      "description": "2021 HP Pavilion 15.6 HD Laptop Computer, Intel Pentium Processor, 8GB RAM, 128GB SSD, HD Webcam, USB-C, HDMI, Ethernet RJ-45, Windows 10 S, Red",
      "price": 400,
      "rating": 4.5,
      "brand": "Hp",
      "screenSize": "14 inches",
      "color": "white",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/hp-white.jpg",
    },
    {
      "id": 5,
      "title": "laptop asus ",
      "description": "2022 ASUS 14 Thin Light Business Student Laptop Computer, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 320 GB Storage, 12Hours Battery, Webcam, Zoom Meeting, Win11 + 1 Year Office 365, Black",
      "price": 229,
      "rating": 4.5,
      "brand": "Asus",
      "screenSize": "14 inches",
      "color": "black",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/asus2.jpg",
    },
  ]
  }
  getAllProducts(){
    return this.products;
  }
  setProducts(products:any){
    this.products = products;
  }
  getProductById(id:any){
    let product = this.products.find( p=> p.id == id)
    return product;
  }

  addProduct(product:any){
    this.products = [...this.products, product]
  }

  updateProduct(product:any){
    let index = this.products.findIndex(p => p.id == product.id)
    let newArray = this.products;
    newArray[index] = product;
    this.products = [...newArray]
  }
}


