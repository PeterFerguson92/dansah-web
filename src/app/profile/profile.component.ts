import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    iconImgPath = '../../assets/images/church_2.png';
    title = 'Roles & Responsabilities';
    subTitle = 'What I do';
    text =
        // tslint:disable-next-line:max-line-length
        'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus. In hac habi tasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac';
    roles = [
        {
            iconImgPath: '../../assets/images/services_1.png',
            type: 'Evangelist',
            description:
                // tslint:disable-next-line:max-line-length
                'Daniel K Ansah travels across the nations in crusades and camp meeting preaching salvation and bringing deliverance to the captives. His passion is to save the lost at any cost. He is the lead evangelist at Jesus Campaign Missions.',
        },
        {
            iconImgPath: '../../assets/images/services_2.png',
            type: 'Pastor',
            description:
                // tslint:disable-next-line:max-line-length
                'He is the lead pastor at Praise Palace Church, where he disciples the flock and raise an army for God. He is primarily called to the youth of this generation and has passion to bring transformation to the lives of these young people. He believes that there is no such thing as impossibility. No limitation. No barriers. Everybody can rise up to fulfil his or her destiny in Christ.',
        },
        {
            iconImgPath: '../../assets/images/services_3.png',
            type: 'Business Executive',
            description:
                // tslint:disable-next-line:max-line-length
                'He is an astute business professional, a Chartered Accountant and Business executive. Daniel serves as a finance professional in many international organizations. His mandate is to bring Christian excellence and dignity to the marketplace.',
        },
        {
            iconImgPath: '../../assets/images/services_4.png',
            type: 'Author and Leader of Leaders',
            description:
                // tslint:disable-next-line:max-line-length
                'Daniel K Ansah’s daily Power Living publications have a wide circulation across the nations. The daily devotional provides hope to the weak and strength to the feeble. Power Living Devotional has become a source of strength and hope to many homes. He also doubles up as the Lead Trainer at The Leadership School, TLS. This is both actual and virtually training platform where leaders are raised to influence the world for Jesus.',
        },
    ];
    constructor() {}

    ngOnInit() {}
}
