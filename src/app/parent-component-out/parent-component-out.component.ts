import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component-out',
  templateUrl: './parent-component-out.component.html',
  styleUrl: './parent-component-out.component.css'
})
export class ParentComponentOutComponent {
  title = 'Parent interacts with child via @Output';
  Counter = 5;

  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
}
