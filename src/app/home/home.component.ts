import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { CommonService } from '../shared/service/common.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    logo;
    footerLogo;
    footerEmail;
    footerAddress;
    footerPhone;
    sections = [
        {
            name: 'quoteOfTheDay',
            isVisible: true,
        },
    ];

    constructor(private service: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.service.getHome().subscribe(
            (data) => {
                if (data.status === 'success') {
                    const result = data.result[0];
                    console.log(result);
                    // this.logo = this.getImgCoverPath(result.top_logo_image_path);
                    this.footerLogo = this.getImgCoverPath(result.footer_logo_image_path);
                    this.footerEmail = result.footer_email;
                    this.footerAddress = result.footer_address;
                    this.footerPhone = result.footer_phone;
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }

    isSectionVisible(componentName) {
        const section = this.getSectionByName(componentName);
        return section.isVisible;
    }

    showSection(value, componentName) {
        for (const section of this.sections) {
            if (section.name === componentName) {
                section.isVisible = value;
            }
        }
    }

    getSectionByName(componentName) {
        return this.sections.find((o) => o.name === componentName);
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }
}
