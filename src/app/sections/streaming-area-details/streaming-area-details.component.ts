import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-streaming-area-details',
    templateUrl: './streaming-area-details.component.html',
    styleUrls: ['./streaming-area-details.component.scss'],
})
export class StreamingAreaDetailsComponent implements OnInit {
    @Input() url;
    constructor() {}

    ngOnInit() {
        console.log(this.url);
    }
}
