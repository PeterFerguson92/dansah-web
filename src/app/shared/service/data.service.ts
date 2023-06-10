import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getQuoteOfTheDay(): Observable<any> {
        const url = 'http://localhost:8000/api/quoteoftheday/';
        return this.http.get(url);
    }
}
