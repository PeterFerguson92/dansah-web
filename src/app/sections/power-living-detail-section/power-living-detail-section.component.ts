import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-power-living-detail-section',
    templateUrl: './power-living-detail-section.component.html',
    styleUrls: ['./power-living-detail-section.component.scss'],
})
export class PowerLivingDetailSectionComponent implements OnInit, OnChanges {
    @Input() powerLiving;
    sortedArticles: any[] = [];

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['powerLiving'] && this.powerLiving?.articles?.length) {
            // Sort articles by date (newest first)
            this.sortedArticles = this.powerLiving.articles.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
        }
    }
}
