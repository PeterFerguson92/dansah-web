import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
    title;
    subTitle;
    description;
    imgPath;
    coverImage;
    data;
    @Output() isDataRetrieved = new EventEmitter<boolean>();

    constructor(private router: Router, private commonService: CommonService, private service: DataService) {}

    ngOnInit() {
        this.service.getAboutMe().subscribe(
            (data) => {
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

    onRedirect() {
        this.router.navigate(['/profile']);
    }
}
