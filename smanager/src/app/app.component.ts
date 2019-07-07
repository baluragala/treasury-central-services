import { Component } from '@angular/core';
import { Subscription2Service } from './subscriptions/subscription2.service';
import { SubscriptionService } from './subscriptions/subscription.service';
import { fromEvent, Subscription } from 'rxjs';
import { take, map } from "rxjs/operators"
import { DomSanitizer, SafeScript } from '@angular/platform-browser';
@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'smanager';
  htmlSnippet: SafeScript = "<a href='javascript:alert('aa')'>SM</a>"
  constructor(private sanitizer: DomSanitizer) {
    let o$ = fromEvent(document, 'click');

    let s: Subscription = o$.pipe(
      take(3),
      map((e: MouseEvent) => ({ x: e.x, y: e.y })),
      map((d: { x: number, y: number }) => ({ x: d.x * 10, y: d.y * 10 }))
    ).subscribe(function next(data) { console.log(data); }, function error(err) { console.log(err) }, function complete() {
      console.log('complete')
    })
  }

  ngOnInit() {
    //this.htmlSnippet = this.sanitizer
  }
  ngDoCheck() {
    console.log("checked")
  }
}
