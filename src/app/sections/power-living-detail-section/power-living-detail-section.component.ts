import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-power-living-detail-section',
    templateUrl: './power-living-detail-section.component.html',
    styleUrls: ['./power-living-detail-section.component.scss'],
})
export class PowerLivingDetailSectionComponent implements OnInit {
    @Input() powerLiving;

    ngOnInit(): void {}
}
