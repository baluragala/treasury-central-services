import { SubscriptionService } from './../subscription.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from '../subscription';

@Component({
  selector: 'sm-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css'],

})
export class SubscriptionListComponent implements OnInit {


  subscriptions: Array<Subscription>;
  constructor(private service: SubscriptionService) {

  }

  ngOnInit() {
    this.service.getSubscriptions().subscribe(subscriptions => this.subscriptions = subscriptions)
  }

}
