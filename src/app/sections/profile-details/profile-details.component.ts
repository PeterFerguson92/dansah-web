import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
    @Input() data;

    constructor(private commonService: CommonService) {}

    ngOnInit() {}

    getImgCoverPath() {
        return this.commonService.getAssetUrl(this.data.cover_image_path);
    }
}
