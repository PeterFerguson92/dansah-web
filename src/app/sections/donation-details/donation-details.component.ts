import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    donateForm: FormGroup;
    options: PaystackOptions = {
        amount: -1,
        email: null,
        ref: null,
        currency: 'ZAR',
    };
    submittedData = null;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.donateForm = this.fb.group({
            fullname: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            amount: ['', Validators.required],
        });
    }

    donate() {
        window.open('https://paystack.com/pay/lu3t5nwy6k', '_blank');
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

    get formControls() {
        return this.donateForm.controls;
    }

    onSubmit() {
        this.options = this.donateForm.value;
        this.submittedData = JSON.stringify(this.donateForm.value, null, 2);
    }
}
