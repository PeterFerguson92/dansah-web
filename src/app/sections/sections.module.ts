import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroComponent } from './intro/intro.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
    declarations: [QuoteOfTheDayComponent, HomeSliderComponent, IntroComponent, ActivitiesComponent],
    imports: [CommonModule],
    exports: [QuoteOfTheDayComponent, HomeSliderComponent, IntroComponent, ActivitiesComponent],
})
export class SectionsModule {}
