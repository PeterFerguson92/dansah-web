import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
    homeActivityTitle = 'Activities';
    homeActivitySubTitle = 'God Love Us All';
    homeActivityText = `Integer nec bibendum lacus.
     Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at
    finibus. In hac habi tasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu
    varius ac`;
    homeActivitiesImgBackground = '../../../assets/images/services.jpg';
    homeActivitiesIconImg = '../../../assets/images/church_2.png';

    homeActivities = [
        {
            iconPath: '../../../assets/images/services_1.png',
            title: 'Prayer Connect',
            alias: 'prayer-connect',
        },
        {
            iconPath: '../../../assets/images/services_2.png',
            title: 'Prayer City',
            alias: 'prayer-city',
        },
        {
            iconPath: '../../../assets/images/services_3.png',
            title: 'The Leadership Institute',
            alias: 'leadership-institute',
        },
        {
            iconPath: '../../../assets/images/services_4.png',
            title: 'Power Living',
            alias: 'power-living',
        },
    ];

    constructor(private router: Router) {}

    ngOnInit() {}

    onSeeDetail(sectionName) {
        this.router.navigate(['/detail', sectionName]).then(() => {
            window.location.reload();
        });
    }
}
