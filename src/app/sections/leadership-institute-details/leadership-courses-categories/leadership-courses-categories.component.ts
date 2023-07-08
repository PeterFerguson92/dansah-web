import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-leadership-courses-categories',
    templateUrl: './leadership-courses-categories.component.html',
    styleUrls: ['./leadership-courses-categories.component.scss'],
})
export class LeadershipCoursesCategoriesComponent implements OnInit {
    @Input() categories;
    title = 'Available Courses';

    constructor(private router: Router) {}

    ngOnInit() {}

    getImgCoverPath(imgCover) {
        return `${environment.apiUrl}${imgCover}`;
    }

    open(level) {
        this.router.navigate(['course/' + level]).then(() => {
            window.location.reload();
        });
    }
}
