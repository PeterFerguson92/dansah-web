import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-leadership-courses-categories',
    templateUrl: './leadership-courses-categories.component.html',
    styleUrls: ['./leadership-courses-categories.component.scss'],
})
export class LeadershipCoursesCategoriesComponent implements OnInit {
    @Input() categories;
    title = 'Available Courses';

    constructor(private router: Router, private commonService: CommonService) {}

    ngOnInit() {}

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }

    open(level) {
        this.router.navigate(['course/' + level]).then(() => {
            window.location.reload();
        });
    }
}
