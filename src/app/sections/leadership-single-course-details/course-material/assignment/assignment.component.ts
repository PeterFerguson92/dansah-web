import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
    @Input() assignments;
    fileToUpload: File | null = null;
    constructor(private commonService: CommonService, private service: DataService) {}

    ngOnInit() {
        console.log(this.assignments);
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
