import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from "../core/services/storage.service";

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private storageService: StorageService) {}

  public isAuthenticated(): boolean {

    //const token = localStorage.getItem('token');
    const token = this.storageService.getCurrentToken();
    return !this.jwtHelper.isTokenExpired(token);

  }
}
