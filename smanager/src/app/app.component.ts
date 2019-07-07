import { Component } from '@angular/core';
import { Subscription2Service } from './subscriptions/subscription2.service';
import { SubscriptionService } from './subscriptions/subscription.service';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'smanager';
}
