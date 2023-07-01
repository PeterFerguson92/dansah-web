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
import { PowerLivingListComponent } from './power-living-list/power-living-list.component';
import { MediaSectionComponent } from './media-section/media-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';
import { PrayerConnectDetailsComponent } from './prayer-connect-details/prayer-connect-details.component';
// tslint:disable-next-line:max-line-length
import { PrayerConnectDescriptionComponent } from './prayer-connect-details/prayer-connect-description/prayer-connect-description.component';
import { PrayerConnectCentersComponent } from './prayer-connect-details/prayer-connect-centers/prayer-connect-centers.component';
// tslint:disable-next-line:max-line-length
import { LeadershipInstituteDescriptionComponent } from './leadership-institute-details/leadership-institute-description/leadership-institute-description.component';
import { LeadershipInstituteDetailsComponent } from './leadership-institute-details/leadership-institute-details.component';
// tslint:disable-next-line:max-line-length
import { LeadershipCoursesCategoriesComponent } from './leadership-institute-details/leadership-courses-categories/leadership-courses-categories.component';
import { LeadershipCoursesListComponent } from './leadership-courses-list/leadership-courses-list.component';
import { LeadershipSingleCourseDetailsComponent } from './leadership-single-course-details/leadership-single-course-details.component';
import { LeadershipSingleCourseDescriptionComponent } from './leadership-single-course-details/leadership-single-course-description/leadership-single-course-description.component';
import { CourseMaterialComponent } from './leadership-single-course-details/course-material/course-material.component';
import { VideoclipsComponent } from './leadership-single-course-details/course-material/videoclips/videoclips.component';

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
        PowerLivingListComponent,
        MediaSectionComponent,
        ContactUsSectionComponent,
        PrayerConnectDetailsComponent,
        PrayerConnectDescriptionComponent,
        PrayerConnectCentersComponent,
        LeadershipInstituteDetailsComponent,
        LeadershipInstituteDescriptionComponent,
        LeadershipCoursesCategoriesComponent,
        LeadershipCoursesListComponent,
        LeadershipSingleCourseDetailsComponent,
        LeadershipSingleCourseDescriptionComponent,
        CourseMaterialComponent,
        VideoclipsComponent,
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
        PowerLivingListComponent,
        MediaSectionComponent,
        ContactUsSectionComponent,
        PrayerConnectDetailsComponent,
        PrayerConnectCentersComponent,
        LeadershipInstituteDetailsComponent,
        LeadershipInstituteDescriptionComponent,
        LeadershipCoursesListComponent,
        LeadershipSingleCourseDetailsComponent,
        LeadershipSingleCourseDescriptionComponent,
        CourseMaterialComponent,
        VideoclipsComponent,
    ],
})
export class SectionsModule {}
