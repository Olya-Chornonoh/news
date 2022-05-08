import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHighlightKeywordsComponent } from './text-highlight-keywords.component';

describe('TextHighlightKeywordsComponent', () => {
  let component: TextHighlightKeywordsComponent;
  let fixture: ComponentFixture<TextHighlightKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextHighlightKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHighlightKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
