import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-leadership-single-course-description',
    templateUrl: './leadership-single-course-description.component.html',
    styleUrls: ['./leadership-single-course-description.component.scss'],
})
export class LeadershipSingleCourseDescriptionComponent implements OnInit {
    @Input() course;
    data;
    constructor(private commonService: CommonService) {}

    ngOnInit() {
        this.data = {
            title: this.course.name,
            shortDescription: this.course.short_description,
            fullDescription: this.course.full_description,
            actionText: null,
            imgPath: this.commonService.getAssetUrl(this.course.cover_image_path),
        };
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }
}
