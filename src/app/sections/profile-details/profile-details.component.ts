import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
    @Input() data;

    constructor() {}

    ngOnInit() {}

}
