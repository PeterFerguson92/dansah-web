import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-course-material',
    templateUrl: './course-material.component.html',
    styleUrls: ['./course-material.component.scss'],
})
export class CourseMaterialComponent implements OnInit {
    @Input() materials;
    constructor() {}

    ngOnInit() {
        console.log(this.materials);
    }
}
