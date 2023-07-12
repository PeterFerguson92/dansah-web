import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
    data;
    message;
    title;
    showLoader = false;
    showNotification = false;

    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getContacts().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.data = data.result[0];
                } else {
                    const error = 'Social Media information not found';
                    this.displayError(error);
                }
                this.showLoader = false;
            },
            (error) => {
                this.displayError(error);
            }
        );
    }

    displayError(error) {
        this.showLoader = false;
        console.log(error);
        this.message = 'Course information not available';
        this.showNotification = true;
    }
}
