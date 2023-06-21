import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-prayer-connect-centers',
    templateUrl: './prayer-connect-centers.component.html',
    styleUrls: ['./prayer-connect-centers.component.scss'],
})
export class PrayerConnectCentersComponent implements OnInit {
    @Input() centers;
    constructor() {}

    ngOnInit() {
        console.log(this.centers);
    }
}
