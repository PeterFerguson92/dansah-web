import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-leadership-institute-courses',
    templateUrl: './leadership-institute-courses.component.html',
    styleUrls: ['./leadership-institute-courses.component.scss'],
})
export class LeadershipInstituteCoursesComponent implements OnInit {
    message;
    data;
    title = 'Courses';
    showLoader = false;
    showNotification = false;
    courses;
    constructor(private activatedRoute: ActivatedRoute, private service: DataService) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const courseLevel = snapshot.paramMap.get('level');
        this.title = courseLevel + ' courses';

        this.showLoader = true;
        this.service.getLeadershipCoursesByLevel(courseLevel).subscribe(
            (data) => {
                if (data.result && data.result.length > 0) {
                    this.courses = data.result;
                } else {
                    this.message = this.title + ' not available';
                    this.showNotification = true;
                }
                this.showLoader = false;
            },
            (error) => {
                this.showLoader = false;
                console.log(error);
                this.message = 'Leadership Institute information not available';
                this.showNotification = true;
            }
        );
    }
}
