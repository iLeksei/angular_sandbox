import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionParentComponent } from './interaction-parent.component';

describe('InteractionParentComponent', () => {
  let component: InteractionParentComponent;
  let fixture: ComponentFixture<InteractionParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
