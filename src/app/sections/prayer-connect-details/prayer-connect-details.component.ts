import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-prayer-connect-details',
    templateUrl: './prayer-connect-details.component.html',
    styleUrls: ['./prayer-connect-details.component.scss'],
})
export class PrayerConnectDetailsComponent implements OnInit {
    @Input() data;
    prayerConnectDescription;
    prayerConnectCenters;
    gallery = [];

    constructor() {}

    ngOnInit() {
        this.prayerConnectCenters = this.data.centers;
        this.prayerConnectDescription = this.data;
        delete this.prayerConnectDescription.centers;
        this.gallery.push(this.data.gallery_image_path_1);
        this.gallery.push(this.data.gallery_image_path_2);
        this.gallery.push(this.data.gallery_image_path_3);
        this.gallery.push(this.data.gallery_image_path_4);
    }
}
