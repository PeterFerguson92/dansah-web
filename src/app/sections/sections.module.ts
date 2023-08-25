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
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';
import { PrayerConnectDetailsComponent } from './prayer-connect-details/prayer-connect-details.component';
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
import { ReadingComponent } from './leadership-single-course-details/course-material/reading/reading.component';
import { PrayerCityDetailsComponent } from './prayer-city-details/prayer-city-details.component';
import { AssesmentComponent } from './leadership-single-course-details/course-material/assesment/assesment.component';
import { AssignmentComponent } from './leadership-single-course-details/course-material/assignment/assignment.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DonationDetailsComponent } from './donation-details/donation-details.component';
import { MinistriesDetailSectionComponent } from './ministries-detail-section/ministries-detail-section.component';
import { MinistriesSectionComponent } from './ministries-section/ministries-section.component';

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
        ContactUsSectionComponent,
        PrayerConnectDetailsComponent,
        LeadershipInstituteDetailsComponent,
        LeadershipInstituteDescriptionComponent,
        LeadershipCoursesCategoriesComponent,
        LeadershipCoursesListComponent,
        LeadershipSingleCourseDetailsComponent,
        LeadershipSingleCourseDescriptionComponent,
        CourseMaterialComponent,
        VideoclipsComponent,
        ReadingComponent,
        PrayerCityDetailsComponent,
        AssesmentComponent,
        AssignmentComponent,
        ProfileDetailsComponent,
        DonationDetailsComponent,
        MinistriesSectionComponent,
        MinistriesDetailSectionComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
    exports: [
        ReactiveFormsModule,
        FormsModule,
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
        ContactUsSectionComponent,
        PrayerConnectDetailsComponent,
        LeadershipInstituteDetailsComponent,
        LeadershipInstituteDescriptionComponent,
        LeadershipCoursesListComponent,
        LeadershipSingleCourseDetailsComponent,
        LeadershipSingleCourseDescriptionComponent,
        CourseMaterialComponent,
        VideoclipsComponent,
        PrayerCityDetailsComponent,
        AssesmentComponent,
        AssignmentComponent,
        ProfileDetailsComponent,
        DonationDetailsComponent,
        MinistriesSectionComponent,
        MinistriesDetailSectionComponent,
    ],
})
export class SectionsModule {}
