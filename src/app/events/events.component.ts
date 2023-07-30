import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
    title = 'Events';
    showLoader = false;
    events;
    message: string;
    showNotification: boolean;
    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getEvents().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.events = data.result;
                    this.showLoader = false;
                } else {
                    this.message = 'events information not available';
                    this.showNotification = true;
                }
            },
            (error) => {
                this.showLoader = false;
                this.message = 'events information not available';
                this.showNotification = true;
                console.log(error);
            }
        );
    }
}
