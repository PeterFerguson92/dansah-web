import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-prayer-connect',
    templateUrl: './prayer-connect.component.html',
    styleUrls: ['./prayer-connect.component.scss'],
})
export class PrayerConnectComponent implements OnInit {
    title = 'Prayer Connect';
    data;

    constructor(private service: DataService) {}

    ngOnInit() {
        this.service.getPowerConnect().subscribe(
            (data) => {
                console.log(data);
                this.data = data.result[0];
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
