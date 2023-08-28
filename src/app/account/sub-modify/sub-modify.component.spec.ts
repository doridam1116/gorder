import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModifyComponent } from './sub-modify.component';

describe('SubModifyComponent', () => {
  let component: SubModifyComponent;
  let fixture: ComponentFixture<SubModifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubModifyComponent]
    });
    fixture = TestBed.createComponent(SubModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
