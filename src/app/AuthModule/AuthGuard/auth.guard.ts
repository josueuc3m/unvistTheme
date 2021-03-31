import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {

    const user: string = localStorage.getItem('user');

    if (user) {

      return true;

    } else {

      localStorage.clear();
      this.router.navigateByUrl('login');
      return false;

    }
  }

}
