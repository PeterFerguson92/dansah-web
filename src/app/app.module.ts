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
import { MediaComponent } from './media/media.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, ProfileComponent, ActivityDetailComponent, EventsComponent, EventDetailComponent, PowerLivingComponent, MediaComponent, ContactUsComponent],
    imports: [BrowserModule, AppRoutingModule, SectionsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
