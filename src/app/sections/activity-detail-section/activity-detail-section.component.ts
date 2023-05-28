import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activity-detail-section',
    templateUrl: './activity-detail-section.component.html',
    styleUrls: ['./activity-detail-section.component.scss'],
})
export class ActivityDetailSectionComponent implements OnInit {
    @Input() activity;
    constructor(private router: Router) {}

    ngOnInit() {}

    onRedirect(sectionName) {
        this.router.navigate([sectionName]).then(() => {
            window.location.reload();
        });
    }
}
