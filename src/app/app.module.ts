import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SectionsModule } from './sections/sections.module';
import { ProfileComponent } from './profile/profile.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { PowerLivingComponent } from './power-living/power-living.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { PrayerConnectComponent } from './prayer-connect/prayer-connect.component';
import { LeadershipInstituteComponent } from './leadership-institute/leadership-institute.component';
import { LeadershipInstituteCoursesComponent } from './leadership-institute-courses/leadership-institute-courses.component';
// tslint:disable-next-line:max-line-length
import { LeadershipInstituteSingleCourseComponent } from './leadership-institute-single-course/leadership-institute-single-course.component';
import { PrayerCityComponent } from './prayer-city/prayer-city.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        ActivityDetailComponent,
        EventsComponent,
        EventDetailComponent,
        PowerLivingComponent,
        ContactUsComponent,
        PrayerConnectComponent,
        LeadershipInstituteComponent,
        LeadershipInstituteCoursesComponent,
        LeadershipInstituteSingleCourseComponent,
        PrayerCityComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, SectionsModule, SharedModule, HttpClientModule],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
