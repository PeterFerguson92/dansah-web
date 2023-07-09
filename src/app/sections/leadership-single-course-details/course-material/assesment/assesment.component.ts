import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-assesment',
    templateUrl: './assesment.component.html',
    styleUrls: ['./assesment.component.scss'],
})
export class AssesmentComponent implements OnInit {
    @Input() assesments;
    constructor(private commonService: CommonService) {}

    ngOnInit() {
        console.log(this.assesments);
    }

    open(documentPath) {
        const url = this.commonService.getAssetUrl(documentPath);
        window.open(url, '_blank');
    }
}
