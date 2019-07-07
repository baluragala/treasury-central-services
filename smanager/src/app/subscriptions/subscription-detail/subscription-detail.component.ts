import { Subscription } from './../subscription';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sm-subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.css']
})
export class SubscriptionDetailComponent implements OnInit {

  subscriptionName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptionName = this.route.snapshot.params.id;
  }

}
