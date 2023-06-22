import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leadership-courses-list',
    templateUrl: './leadership-courses-list.component.html',
    styleUrls: ['./leadership-courses-list.component.scss'],
})
export class LeadershipCoursesListComponent implements OnInit {
    @Input() courses;
    constructor(private router: Router) {}

    ngOnInit() {
        console.log(this.courses);
    }

    viewDetail(id) {
        this.router.navigate(['course-detail/' + id]);
    }
}
