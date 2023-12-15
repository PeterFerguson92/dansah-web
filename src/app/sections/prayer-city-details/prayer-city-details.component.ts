import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-prayer-city-details',
    templateUrl: './prayer-city-details.component.html',
    styleUrls: ['./prayer-city-details.component.scss'],
})
export class PrayerCityDetailsComponent implements OnInit {
    @Input() data;
    gallery = [];

    constructor() {}

    ngOnInit() {
        this.gallery.push(this.data.gallery_image_path_1);
        this.gallery.push(this.data.gallery_image_path_2);
        this.gallery.push(this.data.gallery_image_path_3);
        this.gallery.push(this.data.gallery_image_path_4);
    }
}
