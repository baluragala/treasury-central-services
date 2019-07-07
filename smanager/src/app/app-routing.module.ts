import { HomeComponent } from './home/home.component';
import { ManageSubscriptionReactiveComponent } from './subscriptions/manage-subscription-reactive/manage-subscription-reactive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionListComponent } from './subscriptions/subscription-list/subscription-list.component';
import { ManageSubscriptionComponent } from './subscriptions/manage-subscription/manage-subscription.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subs', loadChildren: () => import("./subscriptions/subscriptions.module").then(m => m.SubscriptionsModule) },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
