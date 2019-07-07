import { SubscriptionService } from './../subscription.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plan, Subscription } from '../subscription';

@Component({
  selector: 'sm-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.css']
})
export class ManageSubscriptionComponent implements OnInit {

  isSubmitted = false;
  subscription: Subscription = { plan_id: null, total_count: 0, start_at: 0, notes: { notes_key: null } }
  plans: Array<Plan>;
  constructor(private service: SubscriptionService) { }


  ngOnInit() {
    this.service.getPlans().subscribe(plans => this.plans = plans)
  }


  handleSubmit(form: NgForm) {
    this.isSubmitted = true

    this.service.createSubscription(form.value).subscribe(subscription => {
      alert(JSON.stringify(subscription))
    })
  }
}
