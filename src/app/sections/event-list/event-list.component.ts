import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  @Input() events;
    path = '../../../assets/images/wallpa.png';
    constructor(private router: Router) {}

    ngOnInit() {
        console.log(this.events);
    }

    onSeeDetail(id) {
        this.router.navigate(['/eventDetail', id]);
    }
}
