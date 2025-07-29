import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../../service/email.service';
@Component({
    selector: 'app-contact-registration',
    templateUrl: './contact-registration.component.html',
    styleUrls: ['./contact-registration.component.scss'],
})
export class ContactRegistrationComponent implements OnInit {
    @Input() event = '';
    contactForm!: FormGroup;
    infoText: string | null = '';
    errorText!: string | null;
    showInfoText!: boolean;
    showErrorText = false;
    showSpinner = false;
    constructor(private emailService: EmailService) {}

    ngOnInit(): void {
        this.contactForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            surname: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9+ ]{7,}$/)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            event: new FormControl({ value: this.event, disabled: true }),
        });
    }

    getFormControl(fControlName: string) {
        return this.contactForm.get(fControlName);
    }

    onSubmit(): void {
        if (this.contactForm.valid) {
            console.log('Form Submitted:', this.contactForm.getRawValue());
            const requestDetails: { [key: string]: any } = {};
            Object.keys(this.contactForm.controls).forEach((key) => {
                const formControl = this.contactForm.controls[key as keyof typeof this.contactForm.controls];
                requestDetails[key] = formControl.value;
            });
            this.sendEmail(requestDetails);
        } else {
            console.log('Form Invalid');
        }
    }

    sendEmail(message: {}): void {
        this.showSpinner = true;
        this.emailService.SendEmail(message).subscribe(
            (data) => {
                this.showSpinner = false;
                this.infoText = 'Request Sent Succesfully';
                this.showInfoText = true;
                this.clearNotification();
                this.clearFields();
            },
            (error) => {
                console.log(error);
                this.showSpinner = false;
                this.showErrorText = true;
                this.errorText = 'Something went wrong, Please contact support';
                this.clearNotification();
                this.clearFields();
            }
        );
    }

    clearNotification() {
        setTimeout(() => {
            this.showInfoText = false;
            this.showErrorText = false;
            this.errorText = null;
            this.infoText = null;
        }, 5000);
    }

    clearFields() {
        (Object.keys(this.contactForm.controls) as Array<keyof typeof this.contactForm.controls>).forEach(
            (key) => {
                this.contactForm.controls[key].reset();
            }
        );
        this.getFormControl('event').setValue(this.event);
    }
}
