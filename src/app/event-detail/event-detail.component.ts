import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
    title = 'Details';
    showLoader = false;
    message: string;
    showNotification: boolean;
    event;
    constructor(private activatedRoute: ActivatedRoute, private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('eventId');
        this.service.getEvent(id).subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.showNotification = false;
                    this.event = data.result;
                } else {
                    const error = 'Event information not found';
                    this.displayError(error);
                }
                this.showLoader = false;
            },
            (error) => {
                this.displayError(error);
            }
        );
    }

    displayError(error) {
        this.showLoader = false;
        console.log(error);
        this.message = 'Course information not available';
        this.showNotification = true;
    }
}
