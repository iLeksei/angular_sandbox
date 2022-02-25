import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDemoComponent } from './svg-demo.component';

describe('SvgDemoComponent', () => {
  let component: SvgDemoComponent;
  let fixture: ComponentFixture<SvgDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
