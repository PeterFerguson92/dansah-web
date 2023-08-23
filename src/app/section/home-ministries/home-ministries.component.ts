import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-home-ministries',
    templateUrl: './home-ministries.component.html',
    styleUrls: ['./home-ministries.component.scss'],
})
export class HomeMinistriesComponent implements OnInit {
    title;
    ministries;
    @Output()
    isDataRetrieved = new EventEmitter<boolean>();

    constructor(private router: Router, private service: DataService) {}

    ngOnInit() {
        this.service.getHomeMinistries().subscribe(
            (data) => {
                console.log(data);
                if (data && data.status === 'success' && data.result[0].ministries.length > 0) {
                    this.isDataRetrieved.emit(true);
                    const result = data.result[0];
                    this.title = result.title;
                    this.ministries = result.ministries;
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

    onSeeDetail(id) {
        this.router.navigate(['/ministry', id]);
    }
}
