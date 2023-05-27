import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
    events = [
        {
            id: 1,
            imgPath: '../../../assets/images/blog_1.jpg',
            title: 'All Believers Fire Nights - ABFN',
            detail1: '3rd Friday',
            detail2: 'of the month',
            description:
                // tslint:disable-next-line:max-line-length
                'ABFN , this is monthly healing and deliverance service event held on third Friday of every month. It is an intense atmosphere of prayer , worship and deliverance',
        },
        {
            id: 2,
            imgPath: '../../../assets/images/blog_2.jpg',
            title: 'International Youth Conference , IYC',
            detail1: '26-29',
            detail2: 'Dec, 2023',
            description:
                // tslint:disable-next-line:max-line-length
                'IYC is an annual event normally held in last week of December where people, from all walks of life, camp in the presence of God to be taught, impacted and transformed by the Word. IYC is an intense atmosphere of Worship, Prayer, Healings and Deliverance.',
        },
        {
            id: 3,
            imgPath: '../../../assets/images/blog_3.jpg',
            title: 'Fire Camps',
            detail1: 'TBD',
            detail2: null,
            description:
                // tslint:disable-next-line:max-line-length
                `This is ministerial training program designed to raise missionaries, church workers and evangelist for the work of God. It's a 3 -day camp meetings divinely inspired for a change of level and supernatural upgrade. CALL to Register for the Next Camp Meeting`,
        },
        {
            id: 4,
            imgPath: '../../../assets/images/blog_2.jpg',
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
