import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTableComponent } from './movement-table.component';

describe('MovementTableComponent', () => {
  let component: MovementTableComponent;
  let fixture: ComponentFixture<MovementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
