import { Component, Input, OnInit } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';

@Component({
    selector: 'app-donation-details',
    templateUrl: './donation-details.component.html',
    styleUrls: ['./donation-details.component.scss'],
})
export class DonationDetailsComponent implements OnInit {
    @Input() data;
    path = '../../../assets/images/wallpa.png';
    title = '';

    options: PaystackOptions = {
        amount: 50000,
        email: 'user@mail.com',
        ref: `${Math.ceil(Math.random() * 10e10)}`,
        currency: 'ZAR',
    };
    constructor() {}

    ngOnInit() {}

    onAdditionalLink() {
        window.open('https://buy.stripe.com/14k6pW2r95mg2oEaEF', '_blank');
    }

    paymentInit() {
        console.log('Payment initialized');
    }

    paymentDone(ref: any) {
        this.title = 'Payment successfull';
        console.log(this.title, ref);
    }

    paymentCancel() {
        console.log('payment failed');
    }
}
