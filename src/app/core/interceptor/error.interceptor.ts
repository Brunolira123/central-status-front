import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor {

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro HTTP:', error);

        if (error.status === 0) {
          alert('Erro de rede ou CORS!');
        } else {
          alert(`Erro ${error.status}: ${error.statusText}`);
        }

        return throwError(() => error);
      })
    );
  }

}