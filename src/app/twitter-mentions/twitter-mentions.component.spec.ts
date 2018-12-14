import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterMentionsComponent } from './twitter-mentions.component';

describe('TwitterMentionsComponent', () => {
  let component: TwitterMentionsComponent;
  let fixture: ComponentFixture<TwitterMentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterMentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
