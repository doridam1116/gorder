import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubActiveComponent } from './sub-active.component';

describe('SubActiveComponent', () => {
  let component: SubActiveComponent;
  let fixture: ComponentFixture<SubActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubActiveComponent]
    });
    fixture = TestBed.createComponent(SubActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
