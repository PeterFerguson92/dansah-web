import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-event-detail-section',
    templateUrl: './event-detail-section.component.html',
    styleUrls: ['./event-detail-section.component.scss'],
})
export class EventDetailSectionComponent implements OnInit {
    @Input() event;
    path = '../../../assets/images/wallpa.png';
    constructor() {}

    ngOnInit() {}
}
