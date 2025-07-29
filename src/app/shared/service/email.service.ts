import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    private url = 'https://api.emailjs.com/api/v1.0/email/send';
    constructor(private http: HttpClient) {}

    SendEmail(input: any) {
        const data = this.getData(input);
        return this.http.post(this.url, data, { responseType: 'text' });
    }
    getData(params: any) {
        return {
            service_id: 'service_by9zdq8',
            template_id: 'template_6jlmxw9',
            user_id: 'DtAgxA2AoWRpkn2RD',
            template_params: params,
        };
    }
}
