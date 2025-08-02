import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-detail-section',
    templateUrl: './article-detail-section.component.html',
    styleUrls: ['./article-detail-section.component.scss'],
})
export class ArticleDetailSectionComponent implements OnInit {
    path = '../../../../assets/images/wallpa.png';

    @Input() article;
    constructor() {}

    ngOnInit(): void {}

    private getExcerpt(): string {
        return `"${this.article.content?.slice(0, 200)}..." – PowerLiving`;
    }

    get whatsappShareUrl(): string {
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(this.getExcerpt())}`;
    }
}
