import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubscriptionReactiveComponent } from './manage-subscription-reactive.component';

describe('ManageSubscriptionReactiveComponent', () => {
  let component: ManageSubscriptionReactiveComponent;
  let fixture: ComponentFixture<ManageSubscriptionReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubscriptionReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubscriptionReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
