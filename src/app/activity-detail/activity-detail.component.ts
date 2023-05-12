import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {
    title;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const sectionName = snapshot.paramMap.get('sectionName');
        this.setSectionDetailTitle(sectionName);
    }

    setSectionDetailTitle(sectionName) {
        switch (sectionName) {
            case 'prayer-connect': {
                this.title = 'Prayer Connect';
                break;
            }
            case 'prayer-city': {
                this.title = 'Prayer City';
                break;
            }
            case 'leadership-school': {
                this.title = 'Leadership School';
                break;
            }
            case 'power-living': {
                this.title = 'Power Living';
                break;
            }
            default: {
                this.title = null;

                break;
            }
        }
    }
}
