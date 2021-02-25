import { Injectable } from "@angular/core";
import { IProduct } from '../products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductDataService {
    private productUrl = "api/products/products.json";
    constructor(private http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
                        .pipe(
                            catchError(this.handleError)
                        );
    }                     

    private handleError(err: HttpErrorResponse) {
        let errorMessage: string = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.message}`
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    };
}