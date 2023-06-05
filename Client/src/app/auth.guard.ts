import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private localStorageKey = 'user';
  constructor(private router: Router) {}
  getUser() {
    const userString = localStorage.getItem(this.localStorageKey);
    return JSON.parse(userString!);
  }
  canActivate(): boolean {
    const isLoggedIn = this.getUser();
    console.log(isLoggedIn);
    
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']); // Chuyển hướng đến trang chủ
      return false;
    }
  }
}
