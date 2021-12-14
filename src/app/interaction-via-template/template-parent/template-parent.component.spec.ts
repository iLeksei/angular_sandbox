import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateParentComponent } from './template-parent.component';

describe('TemplateParentComponent', () => {
  let component: TemplateParentComponent;
  let fixture: ComponentFixture<TemplateParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
