import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-highlight-keywords',
  templateUrl: './text-highlight-keywords.component.html',
  styleUrls: ['./text-highlight-keywords.component.sass']
})
export class TextHighlightKeywordsComponent implements OnInit {

  words: string[] = [];

  @Input()
  public set text(value: string) {
    this.words = value.split(/\s/).filter(Boolean);
  };

  @Input()
  public keywords: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
