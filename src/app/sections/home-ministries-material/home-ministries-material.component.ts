import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-home-ministries-material',
    templateUrl: './home-ministries-material.component.html',
    styleUrls: ['./home-ministries-material.component.scss'],
})
export class HomeMinistriesMaterialComponent implements OnInit {
    title;
    materials;
    @Output()
    isDataRetrieved = new EventEmitter<boolean>();

    constructor(private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.service.getHomeMinistriesMaterial().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.isDataRetrieved.emit(true);
                    const result = data.result[0];
                    this.title = result.title;
                    this.materials = result.materials;
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

    redirect(url) {
        window.open(url, '_blank');
    }
}
