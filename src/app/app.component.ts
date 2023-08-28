import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { LoginService } from './common/login/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'gorder-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

  ]
})
export class AppComponent {
  authenticated:any;
  title = 'gorder';


  constructor(public loginService : LoginService){}


  logoutBtn():void{
    this.loginService.logout();
    this.authenticated = false;
    this.loginService.setAccountSerial(null);
  }
}
