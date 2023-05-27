import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-power-living',
    templateUrl: './power-living.component.html',
    styleUrls: ['./power-living.component.scss'],
})
export class PowerLivingComponent implements OnInit {
    title = 'Power Living';
    subTitle = 'God loves us all';
    iconImgPath = '../../../assets/images/church_1.png';
    powerLivingData = [
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'January Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'February Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'March Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'April Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'May Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'June Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'July Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'August Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'September Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'October Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'November Power Living',
            pdfPath: '',
        },
        {
            imgCover: '../../assets/images/plCover.jpg',
            title: 'Dicember Power Living',
            pdfPath: '',
        },
    ];
    constructor() {}

    ngOnInit() {}
}
