import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-us-section',
    templateUrl: './contact-us-section.component.html',
    styleUrls: ['./contact-us-section.component.scss'],
})
export class ContactUsSectionComponent implements OnInit {
    @Input() data;
    path = '../../../assets/images/wallpa.png';

    constructor() {}

    ngOnInit() {}

}
