import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-contact-registration',
    templateUrl: './contact-registration.component.html',
    styleUrls: ['./contact-registration.component.scss'],
})
export class ContactRegistrationComponent implements OnInit {
    contactForm!: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.contactForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            surname: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9+ ]{7,}$/)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            event: new FormControl({ value: 'International Prophetic Gathering', disabled: true }),
        });
    }

    onSubmit(): void {
        if (this.contactForm.valid) {
            console.log('Form Submitted:', this.contactForm.getRawValue());
        } else {
            console.log('Form Invalid');
        }
    }
}
