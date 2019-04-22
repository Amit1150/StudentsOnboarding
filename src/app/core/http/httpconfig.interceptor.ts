import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { HttpStatusService } from './http-status.service';

@Injectable({
    providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {

    private requestInFlight$: BehaviorSubject<boolean>;
    
    constructor(private messageService: MessageService,
        private statusService : HttpStatusService) {
        this.requestInFlight$ = new BehaviorSubject(false);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                this.statusService.setHttpStatus(true);
                return event;}),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // auto logout if 401 response returned from api
                    location.reload(true);
                } else {
                    // let data = (error && error.error.reason) ? error.error.reason : error.message;
                    // console.log('error data' + JSON.stringify(data));
                    // this.messageService.add({severity:'error', summary: 'Error', detail: data});
                }
                return throwError(error);
                }),
            finalize(() => {
                this.statusService.setHttpStatus(false);
            }));
    }

}