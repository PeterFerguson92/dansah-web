import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-events',
    templateUrl: './home-events.component.html',
    styleUrls: ['./home-events.component.scss'],
})
export class HomeEventsComponent implements OnInit {
    iconImgPath = '../../../assets/images/church_6.png';
    title = 'Upcoming events';
    subTitle = 'God loves us all';
    events = [
        {
            id: 4,
            iconImgPath: '../../../assets/images/news_1.jpg',
            title: 'All Believers Fire Nights - ABFN',
            detail1: '3rd Friday',
            detail2: 'of the month',
            description:
                // tslint:disable-next-line:max-line-length
                'ABFN , this is monthly healing and deliverance service event held on third Friday of every month. It is an intense atmosphere of prayer , worship and deliverance',
        },
        {
            id: 4,
            iconImgPath: '../../../assets/images/news_2.jpg',
            title: 'International Youth Conference , IYC',
            detail1: '26-29',
            detail2: 'Dec, 2023',
            description:
                // tslint:disable-next-line:max-line-length
                'IYC is an annual event normally held in last week of December where people, from all walks of life, camp in the presence of God to be taught, impacted and transformed by the Word. IYC is an intense atmosphere of Worship, Prayer, Healings and Deliverance.',
        },
        {
            id: 4,
            iconImgPath: '../../../assets/images/news_3.jpg',
            title: 'Fire Camps',
            detail1: 'TBD',
            detail2: null,
            description:
                // tslint:disable-next-line:max-line-length
                `This is ministerial training program designed to raise missionaries, church workers and evangelist for the work of God. It's a 3 -day camp meetings divinely inspired for a change of level and supernatural upgrade. CALL to Register for the Next Camp Meeting`,
        },
        {
            id: 4,
            iconImgPath: '../../../assets/images/news_1.jpg',
            title: 'event5',
            detail1: 'TBD',
            detail2: null,
            description:
                // tslint:disable-next-line:max-line-length
                `Eget est lorem ipsum dolor sit amet consectetur adipiscing. Enim neque volutpat ac tincidunt vitae semper. Sed libero enim sed faucibus turpis in eu mi.`,
        },
    ];

    constructor(private router: Router) {}

    ngOnInit() {}

    onSeeDetail(id) {
        this.router.navigate(['/eventDetail', id]).then(() => {
            window.location.reload();
        });
    }
}
