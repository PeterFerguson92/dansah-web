import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-home-ministries-material',
    templateUrl: './home-ministries-material.component.html',
    styleUrls: ['./home-ministries-material.component.scss'],
})
export class HomeMinistriesMaterialComponent implements OnInit {
    title;
    materials;
    @Output()
    isDataRetrieved = new EventEmitter<boolean>();

    constructor(private service: DataService) {}

    ngOnInit() {
        this.service.getHomeMinistriesMaterial().subscribe(
            (data) => {
                if (data && data.status === 'success' && data.result[0].materials.length > 0) {
                    this.isDataRetrieved.emit(true);
                    const result = data.result[0];
                    this.title = result.title;
                    this.materials = result.materials;
                } else {
                    this.isDataRetrieved.emit(false);
                }
            },
            (error) => {
                console.log(error);
                this.isDataRetrieved.emit(false);
            }
        );
    }

    redirect(url) {
        window.open(url, '_blank');
    }
}
