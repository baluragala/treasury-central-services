import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WipGuard implements CanDeactivate<ManageSubscriptionComponent>{
  canDeactivate(component: ManageSubscriptionComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.isSubmitted) {
      return true;
    }

    let userConsent = confirm("You have unsaved changes, would like to leave?");
    return userConsent;
  }

}
