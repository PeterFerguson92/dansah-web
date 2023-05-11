import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
    declarations: [QuoteOfTheDayComponent, HomeSliderComponent, IntroComponent],
    imports: [CommonModule],
    exports: [QuoteOfTheDayComponent, HomeSliderComponent, IntroComponent],
})
export class SectionsModule {}
