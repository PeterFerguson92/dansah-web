import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
    message;
    data;
    title = 'Courses';
    showLoader = false;
    showNotification = false;
    socials;
    constructor(private service: DataService) {}

    ngOnInit() {
        this.title = 'Messages';

        this.showLoader = true;
        this.service.getSocialMedia().subscribe(
            (data) => {
            if (data.status === 'success')
            {
                  console.log('Social Media Data:', data);
                    this.socials = data.result[0].social_media;
                    this.showLoader = false;
                }
            },
            (error) => {
                console.error('Error fetching social media data:', error);
            }
        );
    }
}
