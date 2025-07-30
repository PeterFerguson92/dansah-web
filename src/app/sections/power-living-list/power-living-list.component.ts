import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-power-living-list',
    templateUrl: './power-living-list.component.html',
    styleUrls: ['./power-living-list.component.scss'],
})
export class PowerLivingListComponent implements OnInit {
    @Input() data;
    path = '../../../assets/images/wallpa.png';

    constructor(private router: Router) {}

    ngOnInit() {}

    open(id) {
        console.log(id);
       this.router.navigate(['power-living-detail/' + id]);
    }

    download(url) {
        window.open(url, '_blank');
    }
}
