import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';

  constructor(private service: UsersService){
    this.service = service;
  }
  getLoginDetails(){
    let admin = this.service.getAdmin();
    if(admin.email == this.email && admin.password == this.password){
      this.service.setAdminLoggedIn();
      this.service.adminAuth.next(this.service.adminLoggedIn)
    }else{
      this .service.setuserLoggedIn();
      this.service.userAuth.next(this.service.userLoggedIn)
    }
  }
}
