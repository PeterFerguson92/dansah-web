import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-single-course-description',
    templateUrl: './leadership-single-course-description.component.html',
    styleUrls: ['./leadership-single-course-description.component.scss'],
})
export class LeadershipSingleCourseDescriptionComponent implements OnInit {
    @Input() course;
    data;
    constructor() {}

    ngOnInit() {
        this.data = {
            title: this.course.name,
            shortDescription: this.course.shortDescription,
            fullDescription: this.course.fullDescription,
            actionText: null,
            imgPath: this.course.imgPath,
        };
    }
}
