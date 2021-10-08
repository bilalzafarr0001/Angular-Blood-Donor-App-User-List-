import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1ComponentComponent } from './parent1-component.component';

describe('Parent1ComponentComponent', () => {
  let component: Parent1ComponentComponent;
  let fixture: ComponentFixture<Parent1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent1ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
