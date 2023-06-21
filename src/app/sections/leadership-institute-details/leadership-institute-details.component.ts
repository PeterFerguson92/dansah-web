import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-institute-details',
    templateUrl: './leadership-institute-details.component.html',
    styleUrls: ['./leadership-institute-details.component.scss'],
})
export class LeadershipInstituteDetailsComponent implements OnInit {
    @Input() data;
    leadershipDetailsDescription;
    leadershipDetailsCourses;
    constructor() {}

    ngOnInit() {
        this.leadershipDetailsDescription = this.data;
        this.leadershipDetailsCourses = this.data.courses;
        delete this.leadershipDetailsDescription.courses;
    }
}
