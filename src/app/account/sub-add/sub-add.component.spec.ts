import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAddComponent } from './sub-add.component';

describe('SubAddComponent', () => {
  let component: SubAddComponent;
  let fixture: ComponentFixture<SubAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubAddComponent]
    });
    fixture = TestBed.createComponent(SubAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
