import { Component } from '@angular/core';
import { count } from 'rxjs';
import { CartProductService } from 'src/app/services/cart-product.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  admin:any = false;
  user:any =false;
  cartItems:any = 0;
  constructor(private service: CartProductService, private userService: UsersService){
    this.service = service
  }
  ngOnInit(){
    this.service.productsCount$.subscribe((productsCount) => {
      this.cartItems = productsCount;
    })
    this.userService.adminAuth.subscribe((admin:any) => {
      this.admin = admin;
      console.log(admin)
    })
    this.userService.userAuth.subscribe((user:any) => {
      this.user = user;
    })
  }
  logout(){
    this.userService.logout();
    this.admin=false;
    this.user=false;
  }
}
