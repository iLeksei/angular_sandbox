import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientDemoComponent } from './http-client-demo.component';

describe('HttpClientDemoComponent', () => {
  let component: HttpClientDemoComponent;
  let fixture: ComponentFixture<HttpClientDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
