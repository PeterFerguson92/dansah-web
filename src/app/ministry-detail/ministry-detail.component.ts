import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-ministry-detail',
    templateUrl: './ministry-detail.component.html',
    styleUrls: ['./ministry-detail.component.scss'],
})
export class MinistryDetailComponent implements OnInit {
    ministry;
    message;
    showLoader = false;
    showNotification = false;
    constructor(private activatedRoute: ActivatedRoute, private service: DataService) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('id');
        this.showLoader = true;
        this.service.getMinistry(id).subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.ministry = data.result;
                } else {
                    const error = 'Ministry information not found';
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
        this.message = 'Ministry information not available';
        this.showNotification = true;
    }
}
