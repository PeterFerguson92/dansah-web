import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {
    title;
    showPowerLiving = false;
    showPrayerConnect = false;
    showLeadershipSchool = false;
    showPrayerCity = true;
    activities = [
        {
            alias: 'prayer-connect',
            title: 'Prayer Connect',
            isVisible: false,
        },
        {
            alias: 'prayer-city',
            title: 'Prayer City',
            isVisible: false,
        },
        {
            alias: 'leadership-school',
            title: 'Leadership School',
            isVisible: false,
        },
        {
            alias: 'power-living',
            title: 'Power Living',
            isVisible: false,
        },
    ];

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const activityName = snapshot.paramMap.get('activityName');
        this.setActivityProperties(activityName);
    }

    setActivityProperties(activityName) {
        for (const activity of this.activities) {
            if (activity.alias === activityName) {
                activity.isVisible = true;
                this.title = activity.title;
            } else {
                activity.isVisible = false;
            }
        }
    }
}
