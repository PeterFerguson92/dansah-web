import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-ministries-material',
    templateUrl: './home-ministries-material.component.html',
    styleUrls: ['./home-ministries-material.component.scss'],
})
export class HomeMinistriesMaterialComponent implements OnInit {
    homeMinistriesMaterialTitle = 'Ministries Material';
    homeMinistriesMaterialSubTitle = 'God loves us all';
    homeMinistriesMaterialIconImg = '../../../assets/images/church_4.png';
    homeMinistriesMaterials = [
        {
            imgPath: 'https://m.media-amazon.com/images/I/31O1dYKtzpL._SX305_BO1,204,203,200_.jpg',
            title: 'Book 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            redirectLink:
                // tslint:disable-next-line:max-line-length
                'https://www.amazon.co.uk/Holy-Bible-King-James-Version/dp/000725976X/ref=sr_1_5?crid=1SWCYUA5DMXWP&keywords=bible&qid=1684025228&sprefix=bible%2Caps%2C71&sr=8-5',
        },
        {
            imgPath: 'https://m.media-amazon.com/images/I/31G6B7Tsz7L._SY291_BO1,204,203,200_QL40_ML2_.jpg',
            title: 'Book 2',
            description: 'It is a long established fact that a reader will be distracted',
            link:
                // tslint:disable-next-line:max-line-length
                'https://www.amazon.co.uk/ESV-Economy-Bible-Crossway/dp/1433558270/ref=sr_1_6?crid=1SWCYUA5DMXWP&keywords=bible&qid=1684025228&sprefix=bible%2Caps%2C71&sr=8-6',
        },
        {
            imgPath: 'https://m.media-amazon.com/images/I/31VJnBRICCL._SX443_BO1,204,203,200_.jpg',
            title: 'Book 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link:
                // tslint:disable-next-line:max-line-length
                'https://www.amazon.co.uk/HOLY-BIBLE-James-Version-Presentation/dp/0007946864/ref=sr_1_8?crid=1SWCYUA5DMXWP&keywords=bible&qid=1684025228&sprefix=bible%2Caps%2C71&sr=8-8',
        },
        {
            imgPath: 'https://m.media-amazon.com/images/I/51B-cwVFZRL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
            title: 'Book 4',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Ut enim ad minim veniam, ',
            link:
                // tslint:disable-next-line:max-line-length
                'https://www.amazon.co.uk/NIV-Bible-Journalling-Verse-Mapping-Kintsugi/dp/1473680549/ref=sr_1_10?crid=1SWCYUA5DMXWP&keywords=bible&qid=1684025228&sprefix=bible%2Caps%2C71&sr=8-10',
        },
        {
            imgPath: 'https://m.media-amazon.com/images/I/31259kh2pWL._SX425_BO1,204,203,200_.jpg',
            title: 'Book 5',
            description:
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            link: 'https://www.amazon.co.uk/dp/1529353629/ref=emc_b_5_i',
        },
    ];

    constructor() {}
    ngOnInit() {}

    redirect(url) {
        console.log(url);
        window.open(url, '_blank');
    }
}
