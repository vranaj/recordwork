import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('authtoken')
    if (token) {
      if ((state.url == '/') || (state.url == '/signin')) {
        this.router.navigate(['/posts']);
      } else {
        return true;
      }
    } else {
      if (state.url != '/signin') {
        this.router.navigate(['/signin']);
      } else {
        return true;
      }
    }
  }
}
