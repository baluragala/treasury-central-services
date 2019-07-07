import { Injectable } from '@angular/core';

import { Duartion, Subscription } from './subscription';

@Injectable({
  providedIn: 'root'
})
export class Subscription2Service {

  subscriptions: Array<Subscription> = []
  constructor() {
    this.subscriptions = [
      { name: '2Subscription1', price: 100, duration: 1, durationType: Duartion.MONTH },
      { name: '2Subscription2', price: 10, duration: 4, durationType: Duartion.WEEK },
      { name: '2Subscription3', price: 20, duration: 3, durationType: Duartion.MONTH },
      { name: '2Subscription4', price: 30, duration: 6, durationType: Duartion.MONTH }
    ]
  }

  getSubscriptions(): Array<Subscription> {
    return this.subscriptions;
  }
}
