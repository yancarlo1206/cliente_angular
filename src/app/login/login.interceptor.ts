import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
//import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddTokenInterceptor - ${req.url}`);

    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders:{
        Authorization : `Bearer ${localStorage.getItem("auth_token")}`
      }
    });

    return next.handle(jsonReq);
  }
}
