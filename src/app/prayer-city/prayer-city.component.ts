import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-prayer-city',
    templateUrl: './prayer-city.component.html',
    styleUrls: ['./prayer-city.component.scss'],
})
export class PrayerCityComponent implements OnInit {
    title = 'Prayer City';
    data;
    showLoader = false;
    message: string;
    showNotification: boolean;
    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getPrayerCity().subscribe(
            (data) => {
                if (data.result && data.result.length === 1) {
                    this.data = data.result[0];
                } else {
                    this.message = 'Prayer city information not available';
                    this.showNotification = true;
                }
                this.showLoader = false;
            },
            (error) => {
                this.showLoader = false;
                console.log(error);
                this.message = 'Prayer city information not available';
                this.showNotification = true;
            }
        );
    }
}
