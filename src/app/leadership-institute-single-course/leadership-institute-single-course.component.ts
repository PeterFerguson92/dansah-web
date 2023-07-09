import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

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
    course;

    constructor(private activatedRoute: ActivatedRoute, private service: DataService) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('id');
        this.service.getLeadershipCourse(id).subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.course = data.result;
                } else {
                    const error = 'Course information not found';
                    this.displayError(error);
                }
                this.showLoader = false;
            },
            (error) => {
                this.displayError(error);
            }
        );
    }

    displayError(error) {
        this.showLoader = false;
        console.log(error);
        this.message = 'Course information not available';
        this.showNotification = true;
    }
}
