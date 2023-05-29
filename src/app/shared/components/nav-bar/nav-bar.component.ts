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
            name: 'Donate',
            redirect: '/donate',
        },
        {
            name: 'Contact',
            redirect: '/contact-us',
        },
    ];
    ngOnInit() {}

    onRedirect(sectionName) {
        if (sectionName === '/donate') {
            window.open('https://www.paypal.com/paypalme/Ferguson434', '_blank');
        } else {
            this.router.navigate([sectionName]).then(() => {
                window.location.reload();
            });
        }
    }
}
