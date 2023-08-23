import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-ministries-detail-section',
    templateUrl: './ministries-detail-section.component.html',
    styleUrls: ['./ministries-detail-section.component.scss'],
})
export class MinistriesDetailSectionComponent implements OnInit {
    @Input() ministry;
    path = '../../../assets/images/wallpa.png';
    constructor() {}

    ngOnInit() {}
}
