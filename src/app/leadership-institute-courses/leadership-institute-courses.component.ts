import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-leadership-institute-courses',
    templateUrl: './leadership-institute-courses.component.html',
    styleUrls: ['./leadership-institute-courses.component.scss'],
})
export class LeadershipInstituteCoursesComponent implements OnInit {
    message;
    title = 'Courses';
    showLoader = false;
    showNotification = false;
    courses = [
        {
            id: 1,
            name: 'Course 1',
            description: 'is simply dummy text of the printing and typesetting industry.',
            imgPath: 'https://picsum.photos/500/300/?image=10',
        },
        {
            id: 1,
            name: 'Course 32',
            description: 'is simply dummy text of the printing and typesetting industry.',
            imgPath: 'https://picsum.photos/500/300/?image=10',
        },
        {
            id: 1,
            name: 'Course 113',
            description: 'is simply dummy text of the printing and typesetting industry.',
            imgPath: 'https://picsum.photos/500/300/?image=10',
        },
        {
            id: 1,
            name: 'Course 456',
            description: 'is simply dummy text of the printing and typesetting industry.',
            imgPath: 'https://picsum.photos/500/300/?image=10',
        },
    ];
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const courseLevel = snapshot.paramMap.get('level');
        this.title = courseLevel + ' courses';
    }
}
