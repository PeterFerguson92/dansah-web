import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-event-detail-section',
    templateUrl: './event-detail-section.component.html',
    styleUrls: ['./event-detail-section.component.scss'],
})
export class EventDetailSectionComponent implements OnInit {
    @Input() event;
    gallery = [];
    path = '../../../assets/images/wallpa.png';
    constructor() {}

    ngOnInit() {
        this.gallery.push(this.event.gallery_image_path_1);
        this.gallery.push(this.event.gallery_image_path_2);
        this.gallery.push(this.event.gallery_image_path_3);
        this.gallery.push(this.event.gallery_image_path_4);
    }
}
