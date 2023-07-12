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
        const currentDate = new Date().toISOString().split('T')[0];
        this.service.getDailyQuoteOfTheDay(currentDate).subscribe(
            (data) => {
                if (data.status === 'success') {
                    const result = data.result;
                    this.isDataRetrieved.emit(true);
                    this.title = result.title;
                    this.subtitle = result.sub_title;
                    this.backgroundImage = `${environment.apiUrl}${result.background_icon_image_path}`;
                    this.iconImgPath = `${environment.apiUrl}${result.icon_image_path}`;
                    this.text = result.text;
                    this.source = result.source;
                } else {
                    this.isDataRetrieved.emit(false);
                }
            },
            (error) => {
                console.log(error);
                this.isDataRetrieved.emit(false);
            }
        );
    }
}
