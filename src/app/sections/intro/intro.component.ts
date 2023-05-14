import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
    title = 'About Me';
    subTitle = 'A brief introduction of me';
    text = `Daniel K Ansah’s life is dedicated to touching lives and bringing hope to the hopeless.
    His mission is to establish the Kingdom of God on earth through soulwinning and practical demonstration of the Word of God`;
    imgPath = '../../../../assets/images/intro.jpg';
    iconImgPath = '../../../../assets/images/church_1.png';
    constructor() {}

    ngOnInit() {}
}
