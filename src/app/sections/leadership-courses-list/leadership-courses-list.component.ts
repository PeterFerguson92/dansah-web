import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leadership-courses-list',
    templateUrl: './leadership-courses-list.component.html',
    styleUrls: ['./leadership-courses-list.component.scss'],
})
export class LeadershipCoursesListComponent implements OnInit {
    @Input() courses;
    path = '../../../assets/images/wallpa.png';

    constructor(private router: Router) {}

    ngOnInit() {}

    viewDetail(id) {
        this.router.navigate(['course-detail/' + id]);
    }
}
