import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-prayer-connect-details',
    templateUrl: './prayer-connect-details.component.html',
    styleUrls: ['./prayer-connect-details.component.scss'],
})
export class PrayerConnectDetailsComponent implements OnInit {
    @Input() data;
    prayerConnectDescription;
    prayerConnectCenters;

    constructor(private commonService: CommonService) {}

    ngOnInit() {
        this.prayerConnectCenters = this.data.centers;
        this.prayerConnectDescription = this.data;
        delete this.prayerConnectDescription.centers;
    }

    getImgCoverPath() {
        return this.commonService.getAssetUrl(this.data.cover_image_path);
    }
}
