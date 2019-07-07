import { WipGuard } from './wip.guard';
import { ManageGuard } from './manage.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManageSubscriptionReactiveComponent } from './manage-subscription-reactive/manage-subscription-reactive.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component'
import { SubscriptionService } from './subscription.service';
import { Subscription2Service } from './subscription2.service';
import { Duartion } from './subscription';
import { RouterModule } from '@angular/router';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';
import { SubscriptionHomeComponent } from './subscription-home/subscription-home.component';

@NgModule({
  declarations: [ManageSubscriptionComponent, ManageSubscriptionReactiveComponent, SubscriptionListComponent, SubscriptionDetailComponent, SubscriptionHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: SubscriptionHomeComponent, children: [
          { path: '', component: SubscriptionListComponent },
          { path: 'new', component: ManageSubscriptionComponent },
          { path: ':id', component: SubscriptionDetailComponent }
        ]
      }]
    )
  ],
  providers: [{
    provide: SubscriptionService, useFactory: () => ({
      getSubscriptions() {
        return [
          { name: '4Subscription', price: 100, duration: 1, durationType: Duartion.MONTH },
          { name: '4Subscription2', price: 10, duration: 4, durationType: Duartion.WEEK },
          { name: '4Subscription3', price: 20, duration: 3, durationType: Duartion.MONTH },
          { name: '4Subscription4', price: 30, duration: 6, durationType: Duartion.MONTH }
        ]
      }
    })
  }],
  exports: [ManageSubscriptionComponent, ManageSubscriptionReactiveComponent, SubscriptionListComponent]
})
export class SubscriptionsModule { }
