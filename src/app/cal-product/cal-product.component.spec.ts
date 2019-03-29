import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalProductComponent } from './cal-product.component';

describe('CalProductComponent', () => {
  let component: CalProductComponent;
  let fixture: ComponentFixture<CalProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
