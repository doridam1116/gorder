import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'gorder-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  accountSerial: string = '';

  constructor(private loginService: LoginService, private router: Router, private app: AppComponent, private cookieService: CookieService) { }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.loginBtn();
    }
  }

  loginBtn() {
    this.loginService.login(this.accountSerial).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/product']); // 로그인 성공 시 대시보드 페이지로 이동
          this.app.authenticated = true;
          this.cookieService.set('accountSerial', this.accountSerial);
          this.loginService.setAccountSerial(this.accountSerial);
        }
      },
      (error) => {
        alert(error.error.message);
      }
    )
  }

  registerBtn(){
    this.router.navigate(['/regist']);
  }
}
