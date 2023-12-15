import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-ministries-detail-section',
    templateUrl: './ministries-detail-section.component.html',
    styleUrls: ['./ministries-detail-section.component.scss'],
})
export class MinistriesDetailSectionComponent implements OnInit {
    @Input() ministry;
    path = '../../../assets/images/wallpa.png';
    gallery = [];
    constructor() {}

    ngOnInit() {
        this.gallery.push(this.ministry.gallery_image_path_1);
        this.gallery.push(this.ministry.gallery_image_path_2);
        this.gallery.push(this.ministry.gallery_image_path_3);
        this.gallery.push(this.ministry.gallery_image_path_4);
    }
}
