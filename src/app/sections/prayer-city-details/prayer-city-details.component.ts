import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-prayer-city-details',
    templateUrl: './prayer-city-details.component.html',
    styleUrls: ['./prayer-city-details.component.scss'],
})
export class PrayerCityDetailsComponent implements OnInit {
    @Input() data;
    activity;
    constructor() {}

    ngOnInit() {
        console.log(this.data);
        if (this.data) {
            this.activity = {
                title: this.data.title,
                shortDescription: this.data.short_description,
                fullDescription: this.data.full_description,
                actionText: this.data.action_text,
                imgPath: `${environment.apiUrl}${this.data.cover_image_path}`,
            };
        }
    }
}
