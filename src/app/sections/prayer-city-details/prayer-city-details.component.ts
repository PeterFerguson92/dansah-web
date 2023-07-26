import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-prayer-city-details',
    templateUrl: './prayer-city-details.component.html',
    styleUrls: ['./prayer-city-details.component.scss'],
})
export class PrayerCityDetailsComponent implements OnInit {
    @Input() data;
    constructor() {}

    ngOnInit() {
        console.log(this.data);
    }
}
