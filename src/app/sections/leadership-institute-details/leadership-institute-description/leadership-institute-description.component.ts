import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-leadership-institute-description',
    templateUrl: './leadership-institute-description.component.html',
    styleUrls: ['./leadership-institute-description.component.scss'],
})
export class LeadershipInstituteDescriptionComponent implements OnInit {
    @Input() data;

    constructor(private commonService: CommonService) {}

    ngOnInit() {
        this.data = {
            title: this.data.title,
            shortDescription: this.data.short_description,
            fullDescription: this.data.full_description,
            actionText: this.data.action_text,
            imgPath: this.commonService.getAssetUrl(this.data.cover_image_path),
        };
    }
}
