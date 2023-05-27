import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
    title = 'Details';
    event;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const eventId = snapshot.paramMap.get('eventId');
        this.event = {
            id: 1,
            imgPath: '../../../assets/images/blog_1.jpg',
            title: 'All Believers Fire Nights - ABFN',
            detail1: '3rd Friday',
            detail2: 'of the month',
            description:
                // tslint:disable-next-line:max-line-length
                'ABFN , this is monthly healing and deliverance service event held on third Friday of every month. It is an intense atmosphere of prayer , worship and deliverance',
        };
    }
}
