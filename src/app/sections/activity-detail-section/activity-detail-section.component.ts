import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-activity-detail-section',
    templateUrl: './activity-detail-section.component.html',
    styleUrls: ['./activity-detail-section.component.scss'],
})
export class ActivityDetailSectionComponent implements OnInit {
    @Input() title;
    @Input() shortDescription;
    @Input() fullDescritpion;
    @Input() actionText;
    @Input() imgPath;
    constructor() {}

    ngOnInit() {
        console.log(this.imgPath);
    }
}
