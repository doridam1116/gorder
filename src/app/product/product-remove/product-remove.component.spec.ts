import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRemoveComponent } from './product-remove.component';

describe('ProductRemoveComponent', () => {
  let component: ProductRemoveComponent;
  let fixture: ComponentFixture<ProductRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRemoveComponent]
    });
    fixture = TestBed.createComponent(ProductRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
