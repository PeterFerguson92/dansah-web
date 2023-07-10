import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
    selector: 'app-media-section',
    templateUrl: './media-section.component.html',
    styleUrls: ['./media-section.component.scss'],
})
export class MediaSectionComponent implements OnInit {
    @Input() data;
    title = 'Media title';
    subtitle = 'Media Subtitle';
    paragraphTitle = 'Lorem Ipsum Is Simply Dummy Text Of The Printing Industry.';
    description1 =
        // tslint:disable-next-line:max-line-length
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    description2 =
        // tslint:disable-next-line:max-line-length
        'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.';

    socialMediaData = [
        {
            iconName: 'fab fa-facebook',
            title: 'Follow us on facebook',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            redirectLink: 'https://www.facebook.com/DanielKAnsahofficial',
        },
        {
            iconName: 'fab fa-youtube',
            title: 'Visit our youtube channel',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            redirectLink: 'https://www.youtube.com/@totalvictorytv8863',
        },
        {
            iconName: 'fab fa-audible',
            title: 'Listen to our podcast',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            redirectLink: 'https://www.apple.com/uk/apple-podcasts/',
        },
        {
            iconName: 'fab fa-instagram',
            title: 'Connect on instagram',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            redirectLink: 'https://www.instagram.com/danielkansah/',
        },
    ];

    constructor(private commonService: CommonService) {}

    ngOnInit() {
        console.log(this.data);
    }

    redirect(link) {
        console.log(link);
        window.open(link, '_blank');
    }

    getImgCoverPath(imgCover) {
        return this.commonService.getAssetUrl(imgCover);
    }
}
