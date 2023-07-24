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
    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getEvents().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.events = data.result;
                    this.showLoader = false;
                } else {
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
