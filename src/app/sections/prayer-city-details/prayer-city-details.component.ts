import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-prayer-city-details',
    templateUrl: './prayer-city-details.component.html',
    styleUrls: ['./prayer-city-details.component.scss'],
})
export class PrayerCityDetailsComponent implements OnInit {
    @Input() data;

    constructor(private commonService: CommonService) {}

    ngOnInit() {
    }

    getImgCoverPath() {
        return this.commonService.getAssetUrl(this.data.cover_image_path);
    }
}
