import { Subscription, Duartion } from './subscription';
import { Injectable } from '@angular/core';

@Injectable()
export class SubscriptionService {

  subscriptions: Array<Subscription> = []
  constructor() {
    this.subscriptions = [
      { name: 'Subscription1', price: 100, duration: 1, durationType: Duartion.MONTH },
      { name: 'Subscription2', price: 10, duration: 4, durationType: Duartion.WEEK },
      { name: 'Subscription3', price: 20, duration: 3, durationType: Duartion.MONTH },
      { name: 'Subscription4', price: 30, duration: 6, durationType: Duartion.MONTH }
    ]
  }

  getSubscriptions(): Array<Subscription> {
    return this.subscriptions;
  }

}
