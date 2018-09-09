import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { tap } from 'rxjs/operators';
import { UserStoreService } from "./user-store.service";
@Injectable()
export class StockAppInterceptor implements HttpInterceptor {
    constructor(private userStore: UserStoreService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (this.userStore.token) {
            console.log('INTERCEPTING, HAS TOKEN', this.userStore.token);
            const authReq = req.clone({
                headers: req.headers.set('X-AUTH-HEADER', this.userStore.token)
            });
            console.log("Making an authorized request");
            req = authReq;

        }
        return next.handle(req);
    }
    handleResponse(req, event) {
        console.log('Handling response for ', req.url, event);
        if (event instanceof HttpResponse) {
            console.log('Request for ', req.url,
                ' Response Status ', event.status,
                ' With body ', event.body);
        }

    }
    h
    handleError(req: HttpRequest<any>, event) {
        console.error('Request for ', req.url,
            ' Response Status ', event.status,
            ' With error ', event.error);
    }
}