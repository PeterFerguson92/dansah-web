import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-donation',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
    message;
    donation;
    showLoader = false;
    showNotification = false;

    constructor(private service: DataService) {}

    ngOnInit() {
        this.service.getDonation().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.donation = data.result[0];
                } else {
                    this.message = 'Donation information not available';
                    this.showNotification = true;
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
