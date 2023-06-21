import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-institute-details',
    templateUrl: './leadership-institute-details.component.html',
    styleUrls: ['./leadership-institute-details.component.scss'],
})
export class LeadershipInstituteDetailsComponent implements OnInit {
    @Input() data;
    leadershipDetailsDescription;

    constructor() {}

    ngOnInit() {
        console.log(this.data);
        this.leadershipDetailsDescription = this.data;
    }
}
