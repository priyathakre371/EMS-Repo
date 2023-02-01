import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllempdetailsComponent } from './allempdetails.component';

describe('AllempdetailsComponent', () => {
  let component: AllempdetailsComponent;
  let fixture: ComponentFixture<AllempdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllempdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllempdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
