import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <button (click)="showToast()">Toast me!</button>
  `,
  styles: [`
    h1 { font-family: Lato; }
  `]
})
export class HelloComponent  {
  @Input() 
  name: string;


  showToast() {

  }
}
