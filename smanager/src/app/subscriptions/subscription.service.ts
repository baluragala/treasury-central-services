import { Subscription, Plan } from './subscription';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SubscriptionService {

  subscriptions: Array<Subscription> = []
  constructor(private http: HttpClient) {

  }

  getSubscriptions(limit = "2", page = "1"): Observable<Array<Subscription>> {
    return this.http.get<Array<Subscription>>(`${environment.endpoint}/subscriptions`, {
      headers: {
        "X-App-Token": "1223"
      },
      params: {
        _limit: limit,
        _page: page
      }
    })
  }

  getPlans(): Observable<Array<Plan>> {
    return this.http.get<Array<Plan>>(`${environment.endpoint}/plans`)
  }

  createSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(`${environment.endpoint}/subscriptions`, subscription)
  }

  getSubscription(id: string): Observable<Subscription> {
    return this.http.get<Subscription>(`${environment.endpoint}/subscriptions/${id}`)
  }
}
