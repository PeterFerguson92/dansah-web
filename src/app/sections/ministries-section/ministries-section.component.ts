import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ministries-section',
    templateUrl: './ministries-section.component.html',
    styleUrls: ['./ministries-section.component.scss'],
})
export class MinistriesSectionComponent implements OnInit {
    path = '../../../assets/images/wallpa.png';

    @Input() ministries;
    @Input() title;
    constructor(private router: Router) {}

    ngOnInit() {}

    onSeeDetail(id) {
        console.log(this.ministries);
        console.log('Navigating to ministry detail with ID:', id);
        this.router.navigate(['/ministry', id]);
    }
}
