import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-leadership-institute-single-course',
    templateUrl: './leadership-institute-single-course.component.html',
    styleUrls: ['./leadership-institute-single-course.component.scss'],
})
export class LeadershipInstituteSingleCourseComponent implements OnInit {
    message;
    title = 'Course Name';
    showLoader = false;
    showNotification = false;
    course = {
        id: 1,
        name: 'course name',
        description: 'course description',
        materials: {
            videos: [
                {
                    title: 'Video 1',
                    link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
                    // tslint:disable-next-line:max-line-length
                    description: `56 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
                    Fusce
                    venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
                },
                {
                    title: 'Video 1',
                    link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
                    // tslint:disable-next-line:max-line-length
                    description: `23Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
                      Fusce
                      venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
                },
                {
                    title: 'Video 1',
                    link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
                    // tslint:disable-next-line:max-line-length
                    description: `17 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
                      Fusce
                      venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
                },
                {
                    title: 'Video 1',
                    link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
                    // tslint:disable-next-line:max-line-length
                    description: `1z Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
                      Fusce
                      venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
                },
                {
                    title: 'Video 1',
                    link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
                    // tslint:disable-next-line:max-line-length
                    description: ` 11 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
                      Fusce
                      venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
                },
                {
                    title: 'Video 1',
                    link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
                    // tslint:disable-next-line:max-line-length
                    description: `12 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
                      Fusce
                      venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
                },
            ],
        },
    };
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('level');
        console.log(id);
    }
}
