import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sm-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.css']
})
export class ManageSubscriptionComponent implements OnInit {

  isSubmitted = false;
  subscriptioName: string;
  constructor() { }

  ngOnInit() {
  }


  handleSubmit(form: NgForm) {
    this.isSubmitted = true
    alert(JSON.stringify(form.value))
  }
}
