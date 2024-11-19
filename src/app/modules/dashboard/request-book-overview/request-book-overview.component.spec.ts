import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookOverviewComponent } from './request-book-overview.component';

describe('RequestBookOverviewComponent', () => {
  let component: RequestBookOverviewComponent;
  let fixture: ComponentFixture<RequestBookOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestBookOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestBookOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
