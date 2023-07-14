import { Component, EventEmitter, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
    title;
    subTitle = 'A brief introduction of me';
    description = `Daniel K Ansah’s life is dedicated to touching lives and bringing hope to the hopeless.
    His mission is to establish the Kingdom of God on earth through soulwinning and practical demonstration of the Word of God`;
    imgPath = '../../../../assets/images/intro.jpg';
    coverImage = '../../../../assets/images/church_1.png';
    data;
    isDataRetrieved = new EventEmitter<boolean>();

    constructor(private commonService: CommonService, private service: DataService) {}

    ngOnInit() {
        this.service.getAboutMe().subscribe(
            (data) => {
                console.log(data);
                if (data.status === 'success') {
                    this.title = data.result[0].title;
                    this.description = data.result[0].description;
                    this.coverImage = this.getImgCoverPath(data.result[0].cover_image_path);
                    this.isDataRetrieved.emit(true);
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
}
