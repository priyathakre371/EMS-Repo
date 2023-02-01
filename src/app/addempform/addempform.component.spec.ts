import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempformComponent } from './addempform.component';

describe('AddempformComponent', () => {
  let component: AddempformComponent;
  let fixture: ComponentFixture<AddempformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddempformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
