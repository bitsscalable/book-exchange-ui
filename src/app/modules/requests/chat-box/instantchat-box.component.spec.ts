import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestChatBoxComponent } from './instant-chat-box.component';

describe('NewRequestChatBoxComponent', () => {
  let component: NewRequestChatBoxComponent;
  let fixture: ComponentFixture<NewRequestChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRequestChatBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRequestChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
