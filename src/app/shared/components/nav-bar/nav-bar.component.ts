import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    constructor(private router: Router) {}
    items = [
        {
            name: 'Home',
            redirect: '/home',
        },
        {
            name: 'Events',
            redirect: '/events',
        },
        {
            name: 'Power Living',
            redirect: '/power-living',
        },
        {
            name: 'Media',
            redirect: '/media',
        },
        {
            name: 'Contact',
            redirect: '/contact',
        },
    ];
    ngOnInit() {}

    onRedirect(sectionName) {
        this.router.navigate([sectionName]).then(() => {
            window.location.reload();
        });
    }
}
