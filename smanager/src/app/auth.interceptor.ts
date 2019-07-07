import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercpetign..")
        const newReq = req.clone({
            headers: new HttpHeaders({
                "X-App-Token": "from intercep"
            })
        })

        return next.handle(newReq)
    }

}