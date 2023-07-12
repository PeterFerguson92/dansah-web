import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-media-section',
    templateUrl: './media-section.component.html',
    styleUrls: ['./media-section.component.scss'],
})
export class MediaSectionComponent implements OnInit {
    @Input() data;

    constructor(private commonService: CommonService) {}

    ngOnInit() {
    }

    redirect(link) {
        window.open(link, '_blank');
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }
}
