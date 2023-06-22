import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leadership-courses-categories',
    templateUrl: './leadership-courses-categories.component.html',
    styleUrls: ['./leadership-courses-categories.component.scss'],
})
export class LeadershipCoursesCategoriesComponent implements OnInit {
    @Input() courses;
    title = 'Available Courses';

    constructor(private router: Router) {}

    ngOnInit() {}

    open(level) {
        this.router.navigate(['course/' + level]).then(() => {
            window.location.reload();
        });
    }
}
