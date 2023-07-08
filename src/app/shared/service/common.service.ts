import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    constructor() {}

    getAssetUrl(url): string {
        return `${environment.apiUrl}${url}`;
    }
}
