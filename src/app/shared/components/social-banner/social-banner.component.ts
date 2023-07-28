import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
    selector: 'app-social-banner',
    templateUrl: './social-banner.component.html',
    styleUrls: ['./social-banner.component.scss'],
})
export class SocialBannerComponent implements OnInit {
    data;
    @Output()
    isDataRetrieved = new EventEmitter<boolean>();
    constructor(private service: DataService) {}

    ngOnInit() {
        this.service.getSocialMedia().subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.data = data.result[0];
                    this.isDataRetrieved.emit(true);
                } else {
                    this.isDataRetrieved.emit(false);
                }
            },
            (error) => {
                this.isDataRetrieved.emit(false);
            }
        );
    }

    redirectSocialMediaLink(social) {
        const result = this.data.social_media.find((x) => x.title.toUpperCase() === social.toUpperCase());
        if (result) {
            window.open(result.link, '_blank').focus();
        }
    }

    onDonate() {
        window.open('https://buy.stripe.com/14k6pW2r95mg2oEaEF', '_blank');
    }
}
