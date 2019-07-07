import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sm-manage-subscription-reactive',
  templateUrl: './manage-subscription-reactive.component.html',
  styleUrls: ['./manage-subscription-reactive.component.css']
})
export class ManageSubscriptionReactiveComponent implements OnInit {

  form: FormGroup
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      subscriptionName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)])
    })

    console.log(this.form)
  }

  handleSubmit() {
    alert(JSON.stringify(this.form.value))
  }

}
