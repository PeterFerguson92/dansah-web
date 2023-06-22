import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-leadership-institute-single-course',
    templateUrl: './leadership-institute-single-course.component.html',
    styleUrls: ['./leadership-institute-single-course.component.scss'],
})
export class LeadershipInstituteSingleCourseComponent implements OnInit {
    message;
    title = 'Course Name';
    showLoader = false;
    showNotification = false;
    course = { id: 1, name: 'course name', description: 'course description' };
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('level');
        console.log(id);
    }
}
