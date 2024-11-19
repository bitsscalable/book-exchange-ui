import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConditionInfoComponent } from './book-condition-info.component';

describe('BookConditionInfoComponent', () => {
  let component: BookConditionInfoComponent;
  let fixture: ComponentFixture<BookConditionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookConditionInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookConditionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
