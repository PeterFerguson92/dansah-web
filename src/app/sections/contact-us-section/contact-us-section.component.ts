import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-contact-us-section',
    templateUrl: './contact-us-section.component.html',
    styleUrls: ['./contact-us-section.component.scss'],
})
export class ContactUsSectionComponent implements OnInit {
    @Input() data;
    path = '../../../assets/images/wallpa.png';

    constructor(private commonService: CommonService) {}

    ngOnInit() {}

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }
}
