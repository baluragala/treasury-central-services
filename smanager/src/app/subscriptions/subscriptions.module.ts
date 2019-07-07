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

import { RouterModule } from '@angular/router';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';
import { SubscriptionHomeComponent } from './subscription-home/subscription-home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from '../auth.interceptor';
@NgModule({
  declarations: [ManageSubscriptionComponent, ManageSubscriptionReactiveComponent, SubscriptionListComponent, SubscriptionDetailComponent, SubscriptionHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: SubscriptionHomeComponent, children: [
          { path: '', component: SubscriptionListComponent },
          { path: 'new', component: ManageSubscriptionReactiveComponent },
          { path: 'edit/:id', component: ManageSubscriptionReactiveComponent },
          { path: ':id', component: SubscriptionDetailComponent },

        ]
      }]
    )
  ],
  providers: [{
    provide: SubscriptionService, useClass: SubscriptionService
  }, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  exports: [ManageSubscriptionComponent, ManageSubscriptionReactiveComponent, SubscriptionListComponent]
})
export class SubscriptionsModule { }
