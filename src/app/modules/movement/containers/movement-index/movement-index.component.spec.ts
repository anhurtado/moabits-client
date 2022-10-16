import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementIndexComponent } from './movement-index.component';

describe('MovementIndexComponent', () => {
  let component: MovementIndexComponent;
  let fixture: ComponentFixture<MovementIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
