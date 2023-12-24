import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-leadership-single-course-description',
    templateUrl: './leadership-single-course-description.component.html',
    styleUrls: ['./leadership-single-course-description.component.scss'],
})
export class LeadershipSingleCourseDescriptionComponent implements OnInit {
    @Input() course;
    infoText: string;
    errorText: string;
    showInfoText: boolean;
    showErrorText: boolean;
    showSpinner = false;
    requestForm: UntypedFormGroup;
    showRegistrationForm = false;
    constructor(private formBuilder: UntypedFormBuilder, private service: DataService) {}

    ngOnInit() {
        this.requestForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', [Validators.required]],
            email: ['', Validators.email],
        });
    }

    showRegisterForm() {
        this.showRegistrationForm = true;
    }

    register() {
        const requestDetails = {};
        Object.keys(this.requestForm.controls).forEach((key) => {
            const formControl = this.requestForm.controls[key];
            requestDetails[key] = formControl.value;
        });
        // tslint:disable-next-line:no-string-literal
        requestDetails['course_id'] = this.course.id;

        this.sendRegisterRequest(requestDetails);
    }

    getFormControl(fControlName: string) {
        return this.requestForm.get(fControlName);
    }

    getValidationClass(fControlName) {
        const fControl = this.getFormControl(fControlName);
        if (fControl.dirty && fControl.valid) {
            if ('email' === fControlName) {
                return null;
            }
            return { validInput: true };
        }

        if (fControl.dirty && !fControl.valid) {
            return { invalidInput: true };
        }
    }

    isSubmitDisabled() {
        return !this.requestForm.valid;
    }

    onSubmit() {}

    sendRegisterRequest(details): void {
        this.showSpinner = true;
        this.service.addCourseStudent(details).subscribe(
            (data) => {
                console.log(data);
                this.showSpinner = false;
                this.infoText = 'REGISTRATION COMPLETED';
                this.showInfoText = true;
                this.clearNotification(true);
                this.clearFields();
            },
            (error) => {
                console.log(error);
                this.showSpinner = false;
                this.showErrorText = true;
                this.errorText = error.error.message.toUpperCase();
                this.clearNotification();
                this.clearFields();
            }
        );
    }

    clearNotification(status?) {
        setTimeout(
            // tslint:disable-next-line:space-before-function-paren
            function () {
                this.showInfoText = false;
                this.showErrorText = false;
                this.errorText = null;
                this.infoText = null;
                if (status && status === true) {
                    this.showRegistrationForm = false;
                }
            }.bind(this),
            3000
        );
    }

    clearFields() {
        Object.keys(this.requestForm.controls).forEach((key) => {
            this.requestForm.controls[key].reset();
        });
    }
}
