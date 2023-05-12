import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
    declarations: [NavBarComponent, FooterComponent, PageTitleComponent],
    imports: [CommonModule],
    exports: [NavBarComponent, FooterComponent, PageTitleComponent],
})
export class SharedModule {}
