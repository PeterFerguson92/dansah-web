import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    data;
    showLoader = false;
    message: string;
    showNotification: boolean;
    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getProfile().subscribe(
            (data) => {
                if (data.result && data.result.length === 1) {
                    this.data = data.result[0];
                    this.showNotification = false;
                } else {
                    this.message = 'Profile information not available';
                    this.showNotification = true;
                }
                this.showLoader = false;
            },
            (error) => {
                this.showLoader = false;
                console.log(error);
                this.message = 'Profile information not available';
                this.showNotification = true;
            }
        );
    }
}
