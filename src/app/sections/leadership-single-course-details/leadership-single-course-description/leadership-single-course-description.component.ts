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
        console.log(this.course);
        this.data = {
            title: this.course.name,
            shortDescription: this.course.description,
            fullDescription: null,
            actionText: null,
            imgPath: '../../../assets/images/sermon_image.jpg',
        };
    }
}
