import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-leadership-institute-description',
    templateUrl: './leadership-institute-description.component.html',
    styleUrls: ['./leadership-institute-description.component.scss'],
})
export class LeadershipInstituteDescriptionComponent implements OnInit {
    @Input() data;

    constructor() {}

    ngOnInit() {
        console.log(this.data);
        this.data = {
            title: this.data.title,
            shortDescription: this.data.short_description,
            fullDescription: this.data.full_description,
            actionText: this.data.action_text,
            imgPath: `${environment.apiUrl}${this.data.cover_image_path}`,
        };
    }
}
