import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
        window.open(`${environment.apiUrl}${url}`, '_blank');
    }

    getImgCoverPath(imgCover) {
        return `${environment.apiUrl}${imgCover}`;
    }
}
