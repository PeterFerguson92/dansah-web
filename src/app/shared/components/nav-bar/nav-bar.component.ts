import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    @Input() logo;

    constructor(private router: Router) {}
    items = [
        {
            name: 'Home',
            redirect: '/home',
        },
        // {
        //     name: 'Prayer Connect',
        //     redirect: '/prayer-connect',
        // },
        // {
        //     name: 'Leadership Institute',
        //     redirect: '/detail/leadership-institute',
        // },
        // {
        //     name: 'Events',
        //     redirect: '/events',
        // },
        // {
        //     name: 'Power Living',
        //     redirect: '/power-living',
        // },
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
            window.open('https://buy.stripe.com/14k6pW2r95mg2oEaEF', '_blank');
        } else {
            this.router.navigate([sectionName]).then(() => {
                window.location.reload();
            });
        }
    }
}
