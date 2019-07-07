import { Injectable } from '@angular/core';

import { Subscription } from './subscription';

@Injectable({
  providedIn: 'root'
})
export class Subscription2Service {

  subscriptions: Array<Subscription> = []
  constructor() {

  }

  getSubscriptions(): Array<Subscription> {
    return this.subscriptions;
  }
}
