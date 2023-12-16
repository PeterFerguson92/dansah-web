import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-streaming-area-details',
    templateUrl: './streaming-area-details.component.html',
    styleUrls: ['./streaming-area-details.component.scss'],
})
export class StreamingAreaDetailsComponent implements OnInit {
    @Input() name;
    @Input() url;
    source;
    constructor(protected sanitizer: DomSanitizer) {}

    ngOnInit() {
        console.log(this.url);
        this.source = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
}
