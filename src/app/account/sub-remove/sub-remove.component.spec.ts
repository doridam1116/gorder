import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRemoveComponent } from './sub-remove.component';

describe('SubRemoveComponent', () => {
  let component: SubRemoveComponent;
  let fixture: ComponentFixture<SubRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubRemoveComponent]
    });
    fixture = TestBed.createComponent(SubRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
