import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
    message;
    showLoader = false;
    showNotification = false;
    article;

    constructor(private activatedRoute: ActivatedRoute, private service: DataService) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('id');
        this.service.getPowerLivingArticleDetail(id).subscribe(
          (data) => {
            console.log(data)
                if (data.status === 'success') {
                    this.article = data.result;
                } else {
                    const error = 'Article information not found';
                    this.displayError(error);
                }
                this.showLoader = false;
            },
            (error) => {
                this.displayError(error);
            }
        );
    }

    displayError(error) {
        this.showLoader = false;
        console.log(error);
        this.message = 'Information not available';
        this.showNotification = true;
    }
}
