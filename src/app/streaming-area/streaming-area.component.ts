import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-streaming-area',
    templateUrl: './streaming-area.component.html',
    styleUrls: ['./streaming-area.component.scss'],
})
export class StreamingAreaComponent implements OnInit {
    url;
    showLoader = false;

    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getHome().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.url = data.result[0].url;
                    this.showLoader = false;
                }
            },
            (error) => {
                console.log(error);
                this.showLoader = false;
            }
        );
    }
}
