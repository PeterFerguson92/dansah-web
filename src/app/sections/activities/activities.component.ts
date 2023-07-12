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
    activities = [
        {
            iconImgPath: '../../../assets/images/services_1.png',
            title: 'Prayer Connect',
            alias: 'prayer-connect',
            redirectUrl: '/prayer-connect',
        },
        {
            iconImgPath: '../../../assets/images/services_2.png',
            title: 'Prayer City',
            alias: 'prayer-city',
            redirectUrl: 'prayer-city',
        },
        {
            iconImgPath: '../../../assets/images/services_3.png',
            title: 'The Leadership Institute',
            alias: 'leadership-institute',
            redirectUrl: '/leadership-institute',
        },
        {
            iconImgPath: '../../../assets/images/services_4.png',
            title: 'Power Living',
            alias: 'power-living',
            redirectUrl: '/power-living',
        },
    ];
    @Output()
    isDataRetrieved = new EventEmitter<boolean>();

    constructor(private router: Router, private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.service.getHomeActivities().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.isDataRetrieved.emit(true);
                    const result = data.result[0];
                    this.title = result.title;
                    this.text = result.description;
                    this.imgBackground = this.getImgCoverPath(result.background_image_path);
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

    onSeeDetail(redirectUrl) {
        this.router.navigate([redirectUrl]).then(() => {
            // window.location.reload();
        });
    }
}
