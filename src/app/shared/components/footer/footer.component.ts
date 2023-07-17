import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { DataService } from '../../service/data.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    result;
    footerLogo;
    footerEmail;
    footerAddress;
    footerPhone;
    showLoader = false;

    constructor(private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.showLoader = true;
        this.service.getHome().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.result = data.result[0];
                    this.footerLogo = this.getImgCoverPath(this.result.footer_logo_image_path);
                    this.footerEmail = this.result.footer_email;
                    this.footerAddress = this.result.footer_address;
                    this.footerPhone = this.result.footer_phone;
                    this.showLoader = false;
                }
            },
            (error) => {
                console.log(error);
                this.showLoader = false;
            }
        );
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }
}
