import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-leadership-courses-list',
    templateUrl: './leadership-courses-list.component.html',
    styleUrls: ['./leadership-courses-list.component.scss'],
})
export class LeadershipCoursesListComponent implements OnInit {
    @Input() courses;
    constructor(private router: Router, private commonService: CommonService) {}

    ngOnInit() {}

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }

    viewDetail(id) {
        this.router.navigate(['course-detail/' + id]);
    }
}
