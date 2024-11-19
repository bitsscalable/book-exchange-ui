import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookImgUploadComponent } from './book-img-upload.component';

describe('BookImgUploadComponent', () => {
  let component: BookImgUploadComponent;
  let fixture: ComponentFixture<BookImgUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookImgUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookImgUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
