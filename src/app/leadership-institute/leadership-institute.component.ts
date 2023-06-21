import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-institute',
    templateUrl: './leadership-institute.component.html',
    styleUrls: ['./leadership-institute.component.scss'],
})
export class LeadershipInstituteComponent implements OnInit {
    title = 'Leadership Institute';
    showLoader = false;
    message: string;
    showNotification: boolean;

    data = {
        alias: 'leadership-institute',
        title: 'Leadership institute',
        short_description:
            'The Leadership institute is the Leadership training arm of Daniel K Ansah International.',
        full_description:
            // tslint:disable-next-line:max-line-length
            'The Leadership program is divinely designed to bring total transformation and supernatural encounters in the lives of all participants. Courses are both actual and virtual.',
        action_text: 'Call to ENROLL TODAY',
        img_path: '../../../assets/images/sermon_image.jpg',
    };
    constructor() {}

    ngOnInit() {}
}
