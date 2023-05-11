import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    title = 'dansah-web';

    ngAfterViewInit(): void {
      // import('../assets/js/jquery-3.2.1.min.js');
      // import('../assets/js/blog_custom.js');
      // import('../assets/js/contact_custom.js');
      // import('../assets/js/custom.js');
      // import('../assets/js/elements_custom.js');
      // import('../assets/js/ministries_custom.js');
      // import('../assets/js/sermon_single_custom.js');
      // import('../assets/js/sermons_custom.js');

    }
}
