import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-messages-content',
    templateUrl: './messages-content.component.html',
    styleUrls: ['./messages-content.component.scss'],
})
export class MessagesContentComponent implements OnInit {
    @Input() socials: any;
    categories = [
        {
            name: 'AUDIO',
            link: '/media/audio',
            image: 'assets/images/audio-bible-headphones.jpg',
        },
        {
            name: 'VIDEOS',
            link: '/media/videos',
            image: 'assets/images/online-video.jpg',
        },
        {
            name: 'BOOKS',
            link: '/media/books',
            image: 'assets/images/books.jpg',
        },
        {
            name: 'DEVOTIONAL',
            link: '/media/devotional',
            image: 'assets/images/devotional.jpg',
        },
    ];
    constructor(private router: Router) {}

    ngOnInit(): void {
        console.log('Sockialsd:', this.socials);
    }

    onSeeDetail(category: string): void {
        console.log('Category clicked:', category);
        console.log('Socials:', this.socials);
        switch (category) {
            case 'AUDIO': {
                const podcast = this.socials.find((s) => s.title.toLowerCase() === 'podcast');
                if (podcast) window.open(podcast.link);
                break;
            }

            case 'VIDEOS': {
                const youtube = this.socials.find((s) => s.title.toLowerCase() === 'youtube');
                if (youtube) window.open(youtube.link);
                break;
            }

            case 'BOOKS': {
                this.router.navigate(['/'], { fragment: 'books' });
                break;
            }

            case 'DEVOTIONAL': {
                this.router.navigate(['/power-living']);
                break;
            }

            default:
                console.warn(`Unhandled category: ${category}`);
        }
    }
}
