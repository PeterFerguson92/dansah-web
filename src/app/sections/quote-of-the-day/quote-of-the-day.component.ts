import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quote-of-the-day',
    templateUrl: './quote-of-the-day.component.html',
    styleUrls: ['./quote-of-the-day.component.scss'],
})
export class QuoteOfTheDayComponent implements OnInit {
    quoteTitle = 'Quote of the day';
    quoteSubtitle = 'God love us all';
    quoteBackgroundImage = '../../../assets/images/church_5.png';
    quoteIconImg = '../../../assets/images/church_5.png';
    quoteText = `4 One thing I ask from the LORD, this only do I seek: that I may dwell in the house of the LORD all the days of my life,
        to gaze on the beauty of the LORD and to seek him in his temple.`;
    quoteSource = 'Psalm 27:4';

    constructor() {}

    ngOnInit() {}
}
