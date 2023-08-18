import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Security } from "../utils/security.util";
import { Observable } from "rxjs";

@Injectable()
export class AuthService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = Security.getToken();
    if(!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
