import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
    data;
    message;
    title;
    showLoader = false;
    showNotification = false;
    course;
    constructor(private service: DataService) {}

    ngOnInit() {
        this.service.getSocialMedia().subscribe(
            (data) => {
                console.log(data);
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
