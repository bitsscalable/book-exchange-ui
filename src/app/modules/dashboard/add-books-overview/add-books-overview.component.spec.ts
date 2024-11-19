import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksOverviewComponent } from './add-books-overview.component';

describe('AddBooksOverviewComponent', () => {
  let component: AddBooksOverviewComponent;
  let fixture: ComponentFixture<AddBooksOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBooksOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBooksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
