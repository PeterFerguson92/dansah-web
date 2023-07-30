import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-leadership-institute-details',
    templateUrl: './leadership-institute-details.component.html',
    styleUrls: ['./leadership-institute-details.component.scss'],
})
export class LeadershipInstituteDetailsComponent implements OnInit {
    @Input() data;
    leadershipDetailsDescription;
    leadershipDetailsCategories;

    constructor(private commonService: CommonService) {}

    ngOnInit() {
        this.leadershipDetailsDescription = this.data;
        this.leadershipDetailsCategories = this.data.categories;
        delete this.leadershipDetailsDescription.courses;
    }

    getImgCoverPath() {
        return this.commonService.getAssetUrl(this.data.cover_image_path);
    }
}
