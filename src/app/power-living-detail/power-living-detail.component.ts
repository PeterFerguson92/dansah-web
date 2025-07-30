import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-power-living-detail',
    templateUrl: './power-living-detail.component.html',
    styleUrls: ['./power-living-detail.component.scss'],
})
export class PowerLivingDetailComponent implements OnInit {
    message;
    title = 'Power Living Name';
    showLoader = false;
    showNotification = false;
    powerLiving;

    constructor(private activatedRoute: ActivatedRoute, private service: DataService) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('id');
        this.service.getPowerLivingDetail(id).subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.powerLiving = data.result;
                } else {
                    const error = 'Power Living information not found';
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
