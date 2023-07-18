import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-home-slider',
    templateUrl: './home-slider.component.html',
    styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
    title;
    imgPath1;
    imgPath2;
    imgPath3;

    @Output()
    isDataRetrieved = new EventEmitter<boolean>();
    constructor(private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.service.getHomeSlider().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.isDataRetrieved.emit(true);
                    const result = data.result[0];
                    this.title = result.title;
                    this.imgPath1 = this.getImgCoverPath(result.image1);
                    this.imgPath2 = this.getImgCoverPath(result.image2);
                    this.imgPath3 = this.getImgCoverPath(result.image3);
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

    getBackgroud() {}

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }
}
