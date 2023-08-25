import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-home-ministries',
    templateUrl: './home-ministries.component.html',
    styleUrls: ['./home-ministries.component.scss'],
})
export class HomeMinistriesComponent implements OnInit {
    title;
    message;
    ministries;
    showLoader = false;
    showNotification = false;

    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getHomeMinistries().subscribe(
            (data) => {
                this.showLoader = false;
                if (data && data.status === 'success' && data.result[0].ministries.length > 0) {
                    const result = data.result[0];
                    this.title = result.title;
                    this.ministries = result.ministries;
                } else {
                    const error = 'Ministries information not found';
                    this.displayError(error);
                }
            },
            (error) => {
                console.log(error);
                this.displayError(error);
            }
        );
    }

    displayError(error) {
        this.showLoader = false;
        console.log(error);
        this.message = 'Ministries information not found';
        this.showNotification = true;
    }
}
