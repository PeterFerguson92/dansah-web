import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    onSeeDetail(sectionName) {
        this.router.navigate(['/detail', sectionName]).then(() => {
            window.location.reload();
        });
    }
}
