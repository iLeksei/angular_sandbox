import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponentDemoComponent } from './lazy-component-demo.component';

describe('LazyComponentDemoComponent', () => {
  let component: LazyComponentDemoComponent;
  let fixture: ComponentFixture<LazyComponentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyComponentDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
