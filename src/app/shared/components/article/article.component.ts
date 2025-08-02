import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
    @Input() devotional;

    isExpanded = false;
    visibleText = '';

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.visibleText = this.getTruncatedText();
    }

    toggleSeeMore(): void {
        this.isExpanded = !this.isExpanded;
        this.visibleText = this.isExpanded ? this.devotional.content : this.getTruncatedText();
    }

    open(id) {
        console.log(id);
        this.router.navigate(['article-detail/' + id]);
    }
    getTruncatedText(): string {
        const text = this.devotional.content || '';
        return text.length > 600 ? text.substring(0, 600) + '...' : text;
    }

    get facebookShareUrl(): string {
        const summary = this.getExcerpt();
        const url = window.location.href;
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(
            summary
        )}`;
    }

    get whatsappShareUrl(): string {
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(this.getExcerpt())}`;
    }

    get instagramShareUrl(): string {
        return `https://www.instagram.com`; // Instagram does not support direct share via URL
    }

    get whatsappChannelShareUrl(): string {
        return `https://whatsapp.com/channel/invite/YOUR_CHANNEL_ID`; // Replace with actual channel link
    }

    private getExcerpt(): string {
        return `"${this.devotional.content?.slice(0, 200)}..." – PowerLiving Devotional`;
    }
}
