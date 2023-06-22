import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-courses-list',
    templateUrl: './leadership-courses-list.component.html',
    styleUrls: ['./leadership-courses-list.component.scss'],
})
export class LeadershipCoursesListComponent implements OnInit {
    @Input() courses;
    constructor() {}

    ngOnInit() {
        console.log(this.courses);
    }
}
