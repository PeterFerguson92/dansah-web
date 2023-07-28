import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-leadership-institute',
    templateUrl: './leadership-institute.component.html',
    styleUrls: ['./leadership-institute.component.scss'],
})
export class LeadershipInstituteComponent implements OnInit {
    title = 'Leadership Institute';
    showLoader = false;
    message: string;
    showNotification: boolean;
    data;
    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getLeadershipInstitute().subscribe(
            (data) => {
                if (data.result && data.result.length === 1) {
                    this.data = data.result[0];
                } else {
                    this.message = 'Leadership Institute information not available';
                    this.showNotification = true;
                }
                this.showLoader = false;
            },
            (error) => {
                this.showLoader = false;
                console.log(error);
                this.message = 'Leadership Institute information not available';
                this.showNotification = true;
            }
        );
    }
}
