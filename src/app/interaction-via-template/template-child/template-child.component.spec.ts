import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateChildComponent } from './template-child.component';

describe('TemplateChildComponent', () => {
  let component: TemplateChildComponent;
  let fixture: ComponentFixture<TemplateChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
