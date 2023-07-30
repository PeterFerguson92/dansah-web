import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-home-slider',
    templateUrl: './home-slider.component.html',
    styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
    title;
    imgPath;

    @Output()
    isDataRetrieved = new EventEmitter<boolean>();
    constructor(private router: Router, private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.service.getHomeSlider().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.isDataRetrieved.emit(true);
                    const result = data.result[0];
                    console.log(result);
                    this.title = result.title;
                    this.imgPath = this.getImgCoverPath(result.image);
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

    onRedirect(url) {
        this.router.navigate([url]);
    }
}
