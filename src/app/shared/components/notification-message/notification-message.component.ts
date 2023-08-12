import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.css']
})
export class NotificationMessageComponent implements OnInit {

  @Input() showText: boolean;
  @Input() text: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
