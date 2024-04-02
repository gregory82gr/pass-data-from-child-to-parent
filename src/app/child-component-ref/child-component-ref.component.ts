import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component-ref',
  templateUrl: './child-component-ref.component.html',
  styleUrl: './child-component-ref.component.css'
})
export class ChildComponentRefComponent {
  count = 0;

     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }
}
