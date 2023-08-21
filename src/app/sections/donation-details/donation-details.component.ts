import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-donation-details',
    templateUrl: './donation-details.component.html',
    styleUrls: ['./donation-details.component.scss'],
})
export class DonationDetailsComponent implements OnInit {
    @Input() data;
    path = '../../../assets/images/wallpa.png';

    constructor() {}

    ngOnInit() {}

    onAdditionalLink() {
        window.open('https://buy.stripe.com/14k6pW2r95mg2oEaEF', '_blank');
    }
}
