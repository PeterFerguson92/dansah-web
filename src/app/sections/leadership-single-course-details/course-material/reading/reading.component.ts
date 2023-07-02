import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-reading',
    templateUrl: './reading.component.html',
    styleUrls: ['./reading.component.scss'],
})
export class ReadingComponent implements OnInit {
    @Input() materials;
    constructor() {}

    ngOnInit() {}

    open(url) {
        window.open(url, '_blank');
    }
}
