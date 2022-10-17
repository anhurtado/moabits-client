import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementBalanceComponent } from './movement-balance.component';

describe('MovementBalanceComponent', () => {
  let component: MovementBalanceComponent;
  let fixture: ComponentFixture<MovementBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
