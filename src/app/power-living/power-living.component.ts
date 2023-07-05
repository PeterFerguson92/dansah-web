import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-power-living',
    templateUrl: './power-living.component.html',
    styleUrls: ['./power-living.component.scss'],
})
export class PowerLivingComponent implements OnInit {
    title = 'Power Living';
    data;
    showLoader = false;
    message: string;
  showNotification: boolean;

    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getPowerLiving().subscribe(
            (data) => {
                if (data.result && data.result.length === 1) {
                    this.data = data.result[0];
                } else {
                    this.message = 'Power Living information not available';
                    this.showNotification = true;
                }
                this.showLoader = false;
            },
            (error) => {
                this.showLoader = false;
                console.log(error);
                this.message = 'Prayer connect information not available';
                this.showNotification = true;

            }
        );
    }
}
