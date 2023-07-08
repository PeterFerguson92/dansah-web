import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-single-course-details',
    templateUrl: './leadership-single-course-details.component.html',
    styleUrls: ['./leadership-single-course-details.component.scss'],
})
export class LeadershipSingleCourseDetailsComponent implements OnInit {
    @Input() course;
    constructor() {}

    ngOnInit() {}
}
