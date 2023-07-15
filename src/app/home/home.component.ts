import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { CommonService } from '../shared/service/common.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    logo;
    footerLogo;
    footerEmail;
    footerAddress;
    footerPhone;
    sections = [
        {
            name: 'quoteOfTheDay',
            isVisible: true,
        },
    ];

    constructor() {}

    ngOnInit() {}

    isSectionVisible(componentName) {
        const section = this.getSectionByName(componentName);
        return section.isVisible;
    }

    showSection(value, componentName) {
        for (const section of this.sections) {
            if (section.name === componentName) {
                section.isVisible = value;
            }
        }
    }

    getSectionByName(componentName) {
        return this.sections.find((o) => o.name === componentName);
    }
}
