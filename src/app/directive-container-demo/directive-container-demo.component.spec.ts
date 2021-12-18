import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveContainerDemoComponent } from './directive-container-demo.component';

describe('DirectiveContainerDemoComponent', () => {
  let component: DirectiveContainerDemoComponent;
  let fixture: ComponentFixture<DirectiveContainerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveContainerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveContainerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
