import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input() count: number;

  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  increment() {
      this.count++;
      this.countChanged.emit(this.count);
    }
  decrement() {
      this.count--;
      this.countChanged.emit(this.count);
  }
}
