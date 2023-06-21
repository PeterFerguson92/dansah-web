import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prayer-connect',
    templateUrl: './prayer-connect.component.html',
    styleUrls: ['./prayer-connect.component.scss'],
})
export class PrayerConnectComponent implements OnInit {
    title = 'Prayer Connect';
    data = {
        alias: 'prayer-connect',
        title: 'Prayer Connect',
        shortDescription: 'Prayer Connect is a global mission of networking the world with the power of prayer. ',
        // tslint:disable-next-line:max-line-length
        fullDescription:
            // tslint:disable-next-line:max-line-length
            'Prayer Connect Centre is basically a platform where a group of like minded people meet to share fellowship of the Word, Prayer and sharpen each other. It is a platform for transformation, empowerment, soulwinning and healings. Prayer Connect Centres are spreading very fast in our communities, campuses, companies and cities',
        actionText: 'Call To Locate and join any of our PRAYER CONNECT CENTRES ',
        imgPath: '../../../assets/images/sermon_image.jpg',
        isVisible: false,
        prayerConnectCenters: [
            {
                region: 'Greater Accra Area',
                directors: [
                    { name: 'Enock Ato Saah' },
                    { name: 'Marian Addo' },
                    { name: 'Evangelist Joe ' },
                    { name: 'Emmanuel Saah' },
                    { name: 'Joy' },
                ],
            },
            {
                region: 'BA Regions',
                directors: [
                    { name: 'Enock Ato Saah' },
                    { name: 'Marian Addo' },
                    { name: 'Evangelist Joe ' },
                    { name: 'Emmanuel Saah' },
                    { name: 'Joy' },
                ],
            },
            {
                region: 'Central / Western Region',
                directors: [
                    { name: 'Eric Jones' },
                    { name: 'David Stanley Tawiah Wilson' },
                    { name: 'Nicholas Appiah' },
                    { name: 'Faustina Appiah' },
                ],
            },
            {
                region: 'Ashanti Region',
                directors: [{ name: 'Eric Agyei' }],
            },
            {
                region: 'BA Region',
                directors: [],
            },
        ],
    };
    constructor() {}

    ngOnInit() {}
}
