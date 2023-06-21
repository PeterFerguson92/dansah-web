import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        PageTitleComponent,
        ErrorPageComponent,
        LoaderComponent,
        NotificationComponent,
    ],
    imports: [CommonModule],
    exports: [NavBarComponent, FooterComponent, PageTitleComponent, LoaderComponent, NotificationComponent],
})
export class SharedModule {}
