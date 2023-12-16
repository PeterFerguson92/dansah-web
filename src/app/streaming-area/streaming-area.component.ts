import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-streaming-area',
    templateUrl: './streaming-area.component.html',
    styleUrls: ['./streaming-area.component.scss'],
})
export class StreamingAreaComponent implements OnInit {
    url;
    name;
    showLoader = false;

    constructor(private service: DataService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getHome().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.name = data.result[0].live_event_name;
                    this.url = 'https://www.youtube.com/embed/' + data.result[0].url;
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
