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

    getDailyQuoteOfTheDay(date): Observable<any> {
        const url = `${this.baseUrl}quoteoftheday/daily/date?day=${date}`;
        return this.http.get(url);
    }

    getHome(): Observable<any> {
        const url = `${this.baseUrl}home/`;
        return this.http.get(url);
    }

    getHomeSlider(): Observable<any> {
        const url = `${this.baseUrl}homeslider/`;
        return this.http.get(url);
    }

    getAboutMe(): Observable<any> {
        const url = `${this.baseUrl}homeslider/intro`;
        return this.http.get(url);
    }

    getHomeMinistriesMaterial(): Observable<any> {
        const url = `${this.baseUrl}homeministriesmaterial/`;
        return this.http.get(url);
    }

    getHomeActivities(): Observable<any> {
        const url = `${this.baseUrl}homeactivities/`;
        return this.http.get(url);
    }

    getHomeEvents(): Observable<any> {
        const url = `${this.baseUrl}homeevents/`;
        return this.http.get(url);
    }

    getEvents(): Observable<any> {
        const url = `${this.baseUrl}homeevents/events`;
        return this.http.get(url);
    }

    getEvent(id): Observable<any> {
        const url = `${this.baseUrl}homeevents/event/${id}`;
        return this.http.get(url);
    }

    getPrayerConnect(): Observable<any> {
        const url = `${this.baseUrl}prayerconnect/`;
        return this.http.get(url);
    }

    getPowerLiving(): Observable<any> {
        const url = `${this.baseUrl}powerliving/`;
        return this.http.get(url);
    }

    getPrayerCity(): Observable<any> {
        const url = `${this.baseUrl}prayercity/`;
        return this.http.get(url);
    }

    getProfile(): Observable<any> {
        const url = `${this.baseUrl}profiles/`;
        return this.http.get(url);
    }

    getLeadershipInstitute(): Observable<any> {
        const url = `${this.baseUrl}leadershipinstitute/`;
        return this.http.get(url);
    }

    getLeadershipCourse(id): Observable<any> {
        const url = `${this.baseUrl}leadershipinstitute/course/${id}`;
        return this.http.get(url);
    }

    addCourseStudent(details): Observable<any> {
        const url = `${this.baseUrl}leadershipinstitute/courses/student`;
        return this.http.post(url, details);
    }

    getLeadershipCoursesByLevel(level): Observable<any> {
        const url = `${this.baseUrl}leadershipinstitute/courses/category?level=${level}`;
        return this.http.get(url);
    }

    getSocialMedia(): Observable<any> {
        const url = `${this.baseUrl}socialmedia/`;
        return this.http.get(url);
    }

    getContacts(): Observable<any> {
        const url = `${this.baseUrl}contact/`;
        return this.http.get(url);
    }

    getDonation(): Observable<any> {
        const url = `${this.baseUrl}donation/`;
        return this.http.get(url);
    }

    uploadFile(fileToUpload: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post(this.baseUrl, formData);
    }
}
