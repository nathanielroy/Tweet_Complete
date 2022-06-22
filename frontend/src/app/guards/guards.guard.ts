import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GuardsGuard implements CanActivate {
  user;
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {
    this.user = this.tokenStorageService.getUser();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user) {
      if (
        route.data['roles'] &&
        route.data['roles'].indexOf(this.user.role) === -1
      ) {
        this.router.navigate(['/register']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
