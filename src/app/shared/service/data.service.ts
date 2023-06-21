import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    baseUrl = environment.apiUrl + '/api/';
    constructor(private http: HttpClient) {}

    getQuoteOfTheDay(): Observable<any> {
        const url = `${this.baseUrl}quoteoftheday/`;
        return this.http.get(url);
    }

    getHomeMinistriesMaterial(): Observable<any> {
        const url = `${this.baseUrl}/homeministriesmaterial/`;
        return this.http.get(url);
    }
}
