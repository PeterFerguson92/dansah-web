import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-power-living-list',
    templateUrl: './power-living-list.component.html',
    styleUrls: ['./power-living-list.component.scss'],
})
export class PowerLivingListComponent implements OnInit {
    @Input() title;
    @Input() subTitle;
    @Input() iconImgPath;
    @Input() powerLiving;

    constructor() {}

    ngOnInit() {}

    open(url) {
        window.open(url, '_blank');
    }
}
