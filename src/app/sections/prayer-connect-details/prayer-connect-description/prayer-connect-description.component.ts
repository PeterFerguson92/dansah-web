import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-prayer-connect-description',
    templateUrl: './prayer-connect-description.component.html',
    styleUrls: ['./prayer-connect-description.component.scss'],
})
export class PrayerConnectDescriptionComponent implements OnInit {
    @Input() data;
    constructor() {}

    ngOnInit() {
        this.data = {
            title: this.data.title,
            shortDescription: this.data.short_description,
            fullDescription: this.data.full_description,
            actionText: this.data.action_text,
            imgPath: `${environment.apiUrl}${this.data.image_path}`,
        };
    }
}
