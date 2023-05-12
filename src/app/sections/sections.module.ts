import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroComponent } from './intro/intro.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailSectionComponent } from './activity-detail-section/activity-detail-section.component';

@NgModule({
    declarations: [
        QuoteOfTheDayComponent,
        HomeSliderComponent,
        IntroComponent,
        ActivitiesComponent,
        ActivityDetailSectionComponent,
    ],
    imports: [CommonModule],
    exports: [
        QuoteOfTheDayComponent,
        HomeSliderComponent,
        IntroComponent,
        ActivitiesComponent,
        ActivityDetailSectionComponent,
    ],
})
export class SectionsModule {}
