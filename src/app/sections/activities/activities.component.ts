import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
    title = 'Activities';
    subTitle = 'God Love Us All';
    text = `Integer nec bibendum lacus.
     Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at
    finibus. In hac habi tasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu
    varius ac`;
    imgBackground = '../../../assets/images/services.jpg';
    iconImgPath = '../../../assets/images/church_2.png';
    activities = [
        {
            iconImgPath: '../../../assets/images/services_1.png',
            title: 'Prayer Connect',
            alias: 'prayer-connect',
            redirectUrl: '/prayer-connect',
        },
        {
            iconImgPath: '../../../assets/images/services_2.png',
            title: 'Prayer City',
            alias: 'prayer-city',
            redirectUrl: 'prayer-city',
        },
        {
            iconImgPath: '../../../assets/images/services_3.png',
            title: 'The Leadership Institute',
            alias: 'leadership-institute',
            redirectUrl: '/leadership-institute',
        },
        {
            iconImgPath: '../../../assets/images/services_4.png',
            title: 'Power Living',
            alias: 'power-living',
            redirectUrl: '/power-living',
        },
    ];

    constructor(private router: Router) {}

    ngOnInit() {}

    onSeeDetail(redirectUrl) {
        this.router.navigate([redirectUrl]).then(() => {
            window.location.reload();
        });
    }
}
