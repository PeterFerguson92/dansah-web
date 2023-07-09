import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-assesment',
    templateUrl: './assesment.component.html',
    styleUrls: ['./assesment.component.scss'],
})
export class AssesmentComponent implements OnInit {
    @Input() assesments;
    fileToUpload: File | null = null;

    constructor(private commonService: CommonService, private service: DataService) {}

    ngOnInit() {
        console.log(this.assesments);
    }

    open(documentPath) {
        const url = this.commonService.getAssetUrl(documentPath);
        window.open(url, '_blank');
    }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.service.uploadFile(this.fileToUpload).subscribe(
            (data) => {
                // do something, if upload success
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
