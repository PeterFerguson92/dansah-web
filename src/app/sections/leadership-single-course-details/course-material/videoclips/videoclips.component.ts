import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-videoclips',
    templateUrl: './videoclips.component.html',
    styleUrls: ['./videoclips.component.scss'],
})
export class VideoclipsComponent implements OnInit {
    @Input() videos;
    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
        console.log(this.videos);
    }

    getLink(item): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(item.link);
    }
}
