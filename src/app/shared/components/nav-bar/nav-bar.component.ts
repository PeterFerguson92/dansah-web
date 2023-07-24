import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { DataService } from '../../service/data.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    logo;

    constructor(private router: Router, private service: DataService, private commonService: CommonService) {}
    items = [
        {
            name: 'Home',
            redirect: '/home',
        },
        {
            name: 'Media',
            redirect: '/media',
        },
        {
            name: 'Donate',
            redirect: '/donate',
        },
        {
            name: 'Contact',
            redirect: '/contact-us',
        },
    ];
    ngOnInit() {
        this.service.getHome().subscribe(
            (data) => {
                if (data.status === 'success') {
                    const result = data.result[0];
                    // this.logo = this.getImgCoverPath(result.top_logo_image_path);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }

    onRedirect(sectionName) {
        if (sectionName === '/donate') {
            window.open('https://buy.stripe.com/14k6pW2r95mg2oEaEF', '_blank');
        } else {
            this.router.navigate([sectionName]).then(() => {
                window.location.reload();
            });
        }
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }

    onSeeDetail(redirectUrl) {
        this.router.navigate([redirectUrl]);
    }
}
