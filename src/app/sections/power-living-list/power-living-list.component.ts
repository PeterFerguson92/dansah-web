import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-power-living-list',
    templateUrl: './power-living-list.component.html',
    styleUrls: ['./power-living-list.component.scss'],
})
export class PowerLivingListComponent implements OnInit {
    @Input() data;
    path = '../../../assets/images/wallpa.png';

    constructor() {}

    ngOnInit() {}

    open(url) {
        window.open(url, '_blank');
    }
}
