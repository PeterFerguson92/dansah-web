import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-power-living-list',
    templateUrl: './power-living-list.component.html',
    styleUrls: ['./power-living-list.component.scss'],
})
export class PowerLivingListComponent implements OnInit {
    @Input() data;
    path = '../../../assets/images/wallpa.png';

    constructor(private commonService: CommonService) {}

    ngOnInit() {}

    open(url) {
        window.open(this.commonService.getAssetUrl(url), '_blank');
    }
}
