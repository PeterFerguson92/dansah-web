import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-courses-categories',
    templateUrl: './leadership-courses-categories.component.html',
    styleUrls: ['./leadership-courses-categories.component.scss'],
})
export class LeadershipCoursesCategoriesComponent implements OnInit {
    @Input() courses;
    title = 'Available Courses';

    constructor() {}

    ngOnInit() {
        console.log(this.courses);
    }

    open(text) {}
}
