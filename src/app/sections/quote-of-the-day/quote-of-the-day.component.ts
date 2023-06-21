import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-quote-of-the-day',
    templateUrl: './quote-of-the-day.component.html',
    styleUrls: ['./quote-of-the-day.component.scss'],
})
export class QuoteOfTheDayComponent implements OnInit {
    title;
    subtitle;
    backgroundImage;
    iconImgPath;
    text;
    source;
    @Output()
    isDataRetrieved = new EventEmitter<boolean>();
    constructor(private service: DataService) {}

    ngOnInit() {
        this.service.getQuoteOfTheDay().subscribe(
            (data) => {
                this.isDataRetrieved.emit(true);
                this.title = data.quote_of_the_day[0].title;
                this.subtitle = data.quote_of_the_day[0].sub_title;
                this.backgroundImage = `${environment.apiUrl}${data.quote_of_the_day[0].background_icon_image_path}`;
                this.iconImgPath = `${environment.apiUrl}${data.quote_of_the_day[0].icon_image_path}`;
                this.text = data.quote_of_the_day[0].text;
                this.source = data.quote_of_the_day[0].source;
            },
            (error) => {
                console.log(error);
                this.isDataRetrieved.emit(false);
            }
        );
    }
}
