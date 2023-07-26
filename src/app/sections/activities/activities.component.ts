import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
    title;
    subTitle;
    text;
    imgBackground;
    iconImgPath;
    activities = [];
    @Output()
    isDataRetrieved = new EventEmitter<boolean>();

    constructor(private router: Router, private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.service.getHomeActivities().subscribe(
            (data) => {
                if (data && data.status === 'success') {
                    this.activities.push(data.result[0].leadership_institute);
                    this.activities.push(data.result[0].prayer_city);
                    this.activities.push(data.result[0].prayer_connect);
                    this.activities.push(data.result[0].power_living);
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

    onRedirect(alias) {
        const url = '/' + alias;
        this.router.navigate([url]);
    }
}
