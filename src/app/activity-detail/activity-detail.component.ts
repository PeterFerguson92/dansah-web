import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {
    title;
    shortDescription;
    fullDescription;
    actionText;
    imgPath;
    activities = [
        {
            alias: 'prayer-connect',
            title: 'Prayer Connect',
            shortDescription:
                'Prayer Connect is a global mission of networking the world with the power of prayer. ',
            // tslint:disable-next-line:max-line-length
            fullDescription:
                // tslint:disable-next-line:max-line-length
                'Prayer Connect Centre is basically a platform where a group of like minded people meet to share fellowship of the Word, Prayer and sharpen each other. It is a platform for transformation, empowerment, soulwinning and healings. Prayer Connect Centres are spreading very fast in our communities, campuses, companies and cities',
            actionText: 'Call To Locate and join any of our PRAYER CONNECT CENTRES ',
            imgPath: '../../../assets/images/sermon_image.jpg',
            isVisible: false,
        },
        {
            alias: 'prayer-city',
            title: 'Prayer City',
            shortDescription:
                // tslint:disable-next-line:max-line-length
                'The PRAYERCITY is a residential developing community located in the serene town of Apam designed for supernatural encounters',
            fullDescription:
                // tslint:disable-next-line:max-line-length
                'It’s a beautiful piece of estate with accommodation facilities,  auditorium, praying ground, baptismal area, recreation area, etc. the environment create the right atmosphere for divine visitations. It is an ideal place to have encounters with the Lord',
            actionText: 'Partner with the PRAYERCITY TODAY.',
            imgPath: '../../../assets/images/sermon_image.jpg',
            isVisible: false,
        },
        {
            alias: 'leadership-institute',
            title: 'Leadership institute',
            shortDescription:
                'The Leadership institute is the Leadership training arm of Daniel K Ansah International.',
            fullDescription:
                // tslint:disable-next-line:max-line-length
                'The Leadership program is divinely designed to bring total transformation and supernatural encounters in the lives of all participants. Courses are both actual and virtual.',
            actionText: 'Call to ENROLL TODAY',
            imgPath: '../../../assets/images/sermon_image.jpg',
            isVisible: false,
        },
        {
            alias: 'power-living',
            title: 'Power Living',
            shortDescription:
                'This is a daily publication to bring transformation , healing, deliverance and hope to the people of the world',
            fullDescription:
                // tslint:disable-next-line:max-line-length
                ' The Power Living is a compendium of God’s wisdom, instruction , guidance and direction in every challenges of live. Meditation on these daily publication will bring you into Glory and Honor. You will receive strength in the face of hopelessness. You will receive power to keep moving forward and upwards in the name of Jesus',
            actionText: null,
            imgPath: '../../../assets/images/sermon_image.jpg',
            isVisible: false,
        },
    ];

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const activityName = snapshot.paramMap.get('activityName');
        this.setActivityProperties(activityName);
    }

    setActivityProperties(activityName) {
        const activity = this.activities.filter((obj) => {
            return obj.alias === activityName;
        });
        this.title = activity[0].title;
        this.shortDescription = activity[0].shortDescription;
        this.fullDescription = activity[0].fullDescription;
        this.actionText = activity[0].actionText;
        this.imgPath = activity[0].imgPath;
    }
}
