import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-prayer-connect',
    templateUrl: './prayer-connect.component.html',
    styleUrls: ['./prayer-connect.component.scss'],
})
export class PrayerConnectComponent implements OnInit {
    title = 'Prayer Connect';
    data;
    showLoader = false;
    message: string;
    showNotification: boolean;

    constructor(private router: Router, private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getPrayerConnect().subscribe(
            (data) => {
                if (data.result && data.result.length === 1) {
                    this.data = data.result[0];
                } else {
                    this.message = 'Prayer connect information not available';
                    this.showNotification = true;
                }
                this.showLoader = false;
            },
            (error) => {
                this.showLoader = false;
                console.log(error);
                this.message = 'Prayer connect information not available';
                this.showNotification = true;
                // this.router.navigate(['/error']).then(() => {
                //     window.location.reload();
                // });
            }
        );
    }
}
