import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { AuthService } from './auth.service';
import { StorageService } from "../core/services/storage.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(/*public auth: AuthService,*/ public router: Router, private storageService: StorageService) {}

  canActivate(): boolean {

    /*if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }*/


    //const token = this.storageService.getCurrentToken();
    //return !this.jwtHelper.isTokenExpired(token);

    if(!this.storageService.getCurrentToken()){
      return false;
    }

    return true;
  }

}
