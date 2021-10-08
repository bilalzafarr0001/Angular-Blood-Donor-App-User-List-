import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmptyComponentComponent } from './new-empty-component.component';

describe('NewEmptyComponentComponent', () => {
  let component: NewEmptyComponentComponent;
  let fixture: ComponentFixture<NewEmptyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmptyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmptyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
