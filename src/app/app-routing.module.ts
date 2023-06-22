import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { PowerLivingComponent } from './power-living/power-living.component';
import { MediaComponent } from './media/media.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrayerConnectComponent } from './prayer-connect/prayer-connect.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { LeadershipInstituteComponent } from './leadership-institute/leadership-institute.component';
// tslint:disable-next-line:max-line-length
import { LeadershipInstituteCoursesComponent } from './leadership-institute-courses/leadership-institute-courses.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'events', component: EventsComponent },
    { path: 'detail/:activityName', component: ActivityDetailComponent },
    { path: 'eventDetail/:eventId', component: EventDetailComponent },
    { path: 'prayer-connect', component: PrayerConnectComponent },
    { path: 'power-living', component: PowerLivingComponent },
    { path: 'leadership-institute', component: LeadershipInstituteComponent },
    { path: 'course/:level', component: LeadershipInstituteCoursesComponent },
    { path: 'media', component: MediaComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
