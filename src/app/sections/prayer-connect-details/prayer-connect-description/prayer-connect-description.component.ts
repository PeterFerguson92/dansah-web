import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-prayer-connect-description',
    templateUrl: './prayer-connect-description.component.html',
    styleUrls: ['./prayer-connect-description.component.scss'],
})
export class PrayerConnectDescriptionComponent implements OnInit {
    @Input() data;
    constructor() {}

    ngOnInit() {}
}
