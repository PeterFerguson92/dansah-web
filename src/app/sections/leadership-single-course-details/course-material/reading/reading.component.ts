import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-reading',
    templateUrl: './reading.component.html',
    styleUrls: ['./reading.component.scss'],
})
export class ReadingComponent implements OnInit {
    @Input() readings;
    constructor(private commonService: CommonService) {}

    ngOnInit() {
        console.log(this.readings);
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }

    open(documentPath) {
        const url = this.commonService.getAssetUrl(documentPath);
        window.open(url, '_blank');
    }
}
