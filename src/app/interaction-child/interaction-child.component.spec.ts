import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionChildComponent } from './interaction-child.component';

describe('InteractionChildComponent', () => {
  let component: InteractionChildComponent;
  let fixture: ComponentFixture<InteractionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
