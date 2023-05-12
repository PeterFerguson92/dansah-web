import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroComponent } from './intro/intro.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PrayerConnectComponent } from './prayer-connect/prayer-connect.component';
import { PrayerCityComponent } from './prayer-city/prayer-city.component';
import { LeadershipSchoolComponent } from './leadership-school/leadership-school.component';
import { PowerLivingComponent } from './power-living/power-living.component';

@NgModule({
    declarations: [
        QuoteOfTheDayComponent,
        HomeSliderComponent,
        IntroComponent,
        ActivitiesComponent,
        PrayerConnectComponent,
        PrayerCityComponent,
        LeadershipSchoolComponent,
        PowerLivingComponent,
    ],
    imports: [CommonModule],
    exports: [
        QuoteOfTheDayComponent,
        HomeSliderComponent,
        IntroComponent,
        ActivitiesComponent,
        PrayerConnectComponent,
        PrayerCityComponent,
        LeadershipSchoolComponent,
        PowerLivingComponent,
    ],
})
export class SectionsModule {}
