import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-detail-section',
    templateUrl: './event-detail-section.component.html',
    styleUrls: ['./event-detail-section.component.scss'],
})
export class EventDetailSectionComponent implements OnInit {
    @Input() event;
    constructor() {}

    ngOnInit() {
        console.log(this.event);
    }
}
