import { ActivatedRoute } from '@angular/router';
import { SubscriptionService } from './../subscription.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Plan } from '../subscription';

@Component({
  selector: 'sm-manage-subscription-reactive',
  templateUrl: './manage-subscription-reactive.component.html',
  styleUrls: ['./manage-subscription-reactive.component.css']
})
export class ManageSubscriptionReactiveComponent implements OnInit {
  plans: Array<Plan>;
  form: FormGroup;
  addonArray: FormArray;
  constructor(private service: SubscriptionService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    //   plan_id: new FormControl(),
    //   total_count: new FormControl(),
    //   start_at: new FormControl(),
    //   notes: new FormGroup({
    //     notes_key: new FormControl()
    //   }),
    //   addons: new FormArray([new FormGroup({
    //     item: new FormGroup({
    //       name: new FormControl(),
    //       amount: new FormControl(),
    //       currency: new FormControl()
    //     })
    //   }), new FormGroup({
    //     item: new FormGroup({
    //       name: new FormControl(),
    //       amount: new FormControl(),
    //       currency: new FormControl()
    //     })
    //   })])
    // })

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      plan_id: '',
      total_count: '',
      start_at: '',
      notes: this.fb.group({
        notes_key: ''
      }),
      addons: this.fb.array([this.fb.group({
        item: this.fb.group({
          name: '',
          amount: '',
          currency: ''
        })
      })])
    })

    this.addonArray = this.form.get('addons') as FormArray;
    this.service.getPlans().subscribe(p => this.plans = p)
    this.service.getSubscription(this.route.snapshot.params["id"]).subscribe(sub => {
      this.form.patchValue(sub)
    })
    console.log(this.form)
  }


  addAddon() {
    let formGroup: FormGroup = this.fb.group({
      item: this.fb.group({
        name: '',
        amount: '',
        currency: ''
      })
    })

    let addonsFormArray: FormArray = this.form.get("addons") as FormArray;
    addonsFormArray.push(formGroup);
  }

  handleSubmit() {
    console.log(this.form)
    alert(JSON.stringify(this.form.value))
  }

}
