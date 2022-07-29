import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dark-light-mode',
  templateUrl: './dark-light-mode.component.html',
  styleUrls: ['./dark-light-mode.component.css']
})
export class DarkLightModeComponent implements OnInit {
  theme : Theme = 'light-theme';
  constructor(
    @Inject(DOCUMENT) private document: Document
    , private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initialzeTheme();
  }

  switchTheme(){
    this.document.body.classList.replace(this.theme, this.theme === "light-theme" ? (this.theme = 'dark-theme') : (this.theme = 'light-theme'));
  }

  initialzeTheme = (): void => this.renderer.addClass(this.document.body, this.theme);
}

export type Theme = 'light-theme' | "dark-theme";
