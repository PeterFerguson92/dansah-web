import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-leadership-institute-details',
    templateUrl: './leadership-institute-details.component.html',
    styleUrls: ['./leadership-institute-details.component.scss'],
})
export class LeadershipInstituteDetailsComponent implements OnInit {
    prayerConnectCentres = [
        {
            region: 'Greater Accra Area',
            directors: [
                { name: 'Enock Ato Saah' },
                { name: 'Marian Addo' },
                { name: 'Evangelist Joe ' },
                { name: 'Emmanuel Saah' },
                { name: 'Joy' },
            ],
        },
        {
            region: 'BA Regions',
            directors: [
                { name: 'Enock Ato Saah' },
                { name: 'Marian Addo' },
                { name: 'Evangelist Joe ' },
                { name: 'Emmanuel Saah' },
                { name: 'Joy' },
            ],
        },
        {
            region: 'Central / Western Region',
            directors: [
                { name: 'Eric Jones' },
                { name: 'David Stanley Tawiah Wilson' },
                { name: 'Nicholas Appiah' },
                { name: 'Faustina Appiah' },
            ],
        },
    ];
    constructor() {}

    ngOnInit() {}
}
