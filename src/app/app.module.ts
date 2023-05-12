import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SectionsModule } from './sections/sections.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, ProfileComponent],
    imports: [BrowserModule, AppRoutingModule, SectionsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
