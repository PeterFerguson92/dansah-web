import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroComponent } from './intro/intro.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailSectionComponent } from './activity-detail-section/activity-detail-section.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { HomeMinistriesMaterialComponent } from './home-ministries-material/home-ministries-material.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailSectionComponent } from './event-detail-section/event-detail-section.component';

@NgModule({
    declarations: [
        QuoteOfTheDayComponent,
        HomeSliderComponent,
        IntroComponent,
        ActivitiesComponent,
        ActivityDetailSectionComponent,
        HomeEventsComponent,
        HomeMinistriesMaterialComponent,
        EventListComponent,
        EventDetailSectionComponent,
    ],
    imports: [CommonModule],
    exports: [
        QuoteOfTheDayComponent,
        HomeSliderComponent,
        HomeEventsComponent,
        HomeMinistriesMaterialComponent,
        IntroComponent,
        ActivitiesComponent,
        ActivityDetailSectionComponent,
        EventListComponent,
        EventDetailSectionComponent,
    ],
})
export class SectionsModule {}
