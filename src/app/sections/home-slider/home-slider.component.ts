import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-slider',
    templateUrl: './home-slider.component.html',
    styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
    title = 'Winning Souls and Improving Lives……';
    imgPath1 = '../../../../assets/images/cross_1.png';
    imgPath2 = '../../../../assets/images/cross_1.png';
    imgPath3 = '../../../../assets/images/cross_1.png';
    constructor() {}

    ngOnInit() {}
}
