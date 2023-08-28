import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']); // 로그인되지 않은 사용자는 로그인 페이지로 리다이렉트
      return false;
    }
  }
}
