import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-home-events',
    templateUrl: './home-events.component.html',
    styleUrls: ['./home-events.component.scss'],
})
export class HomeEventsComponent implements OnInit {
    title;
    events;

    @Output()
    isDataRetrieved = new EventEmitter<boolean>();

    constructor(private router: Router, private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.service.getHomeEvents().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.isDataRetrieved.emit(true);
                    const result = data.result[0];
                    this.events = result.events;
                } else {
                    this.isDataRetrieved.emit(false);
                }
            },
            (error) => {
                console.log(error);
                this.isDataRetrieved.emit(false);
            }
        );
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }

    onSeeDetail(id) {
        this.router.navigate(['/eventDetail', id]);
    }
}
