import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/service/data.service';

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
    course;
    // course = {
    //     id: 1,
    //     name: 'course name',
    //     imgPath: '../../assets/leadership/course1.jpeg',
    //     shortDescription: 'course description',
    //     fullDescription: `Lorem ipsum dolor sit amet. Est consequatur veniam hic minima repellendus et beatae modi eum officia quaerat eos voluptatum officiis et distinctio alias. A dolor error rem tempore nihil et inventore veniam et autem esse. Est ullam esse aut voluptatem facilis et tempora omnis et magnam nihil ab quas reiciendis eos neque quia.
    //     In maxime voluptatem nam ipsum similique et quia minima quo architecto voluptatibus est fugit reprehenderit est aliquid explicabo. Eum blanditiis quisquam cum voluptates quis et veritatis possimus rem dolores molestiae qui autem quam qui necessitatibus minus. Id repellat consequatur est veritatis quibusdam sed asperiores sint. Ut quisquam praesentium et inventore eius est deserunt repellat ut quibusdam voluptates in accusamus optio.`,
    //     materials: {
    //         reading: [
    //             {
    //                 imgCover: '../../assets/images/biblecourse.jpeg',
    //                 title: 'Bible course 1',
    //                 pdfPath: '../../assets/bible.pdf',
    //             },
    //             {
    //                 imgCover: '../../assets/images/biblecourse.jpeg',
    //                 title: 'Bible course 13',
    //                 pdfPath: '../../assets/bible.pdf',
    //             },
    //             {
    //                 imgCover: '../../assets/images/biblecourse.jpeg',
    //                 title: 'Bible course 61',
    //                 pdfPath: '../../assets/bible.pdf',
    //             },
    //             {
    //                 imgCover: '../../assets/images/biblecourse.jpeg',
    //                 title: 'Bible course 14',
    //                 pdfPath: '../../assets/bible.pdf',
    //             },
    //             {
    //                 imgCover: '../../assets/images/biblecourse.jpeg',
    //                 title: 'Bible course 2',
    //                 pdfPath: '../../assets/bible.pdf',
    //             },
    //         ],
    //         videos: [
    //             {
    //                 title: 'Video 1',
    //                 link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
    //                 description: `56 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
    //                 Fusce
    //                 venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
    //             },
    //             {
    //                 title: 'Video 1',
    //                 link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
    //                 description: `23Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
    //                   Fusce
    //                   venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
    //             },
    //             {
    //                 title: 'Video 1',
    //                 link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
    //                 description: `17 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
    //                   Fusce
    //                   venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
    //             },
    //             {
    //                 title: 'Video 1',
    //                 link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
    //                 description: `1z Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
    //                   Fusce
    //                   venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
    //             },
    //             {
    //                 title: 'Video 1',
    //                 link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
    //                 description: ` 11 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
    //                   Fusce
    //                   venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
    //             },
    //             {
    //                 title: 'Video 1',
    //                 link: 'https://player.vimeo.com/video/3653567?h=d47c84c7f6',
    //                 description: `12 Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend.
    //                   Fusce
    //                   venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.`,
    //             },
    //         ],
    //     },
    // };
    constructor(private activatedRoute: ActivatedRoute, private service: DataService) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const id = snapshot.paramMap.get('id');
        this.service.getLeadershipCourse(id).subscribe(
            (data) => {
                if (data.status === 'success') {
                    this.course = data.result;
                } else {
                    const error = 'Course information not found';
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
        this.message = 'Course information not available';
        this.showNotification = true;
    }
}
