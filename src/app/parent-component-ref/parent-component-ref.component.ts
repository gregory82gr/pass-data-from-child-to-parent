import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component-ref',
  templateUrl: './parent-component-ref.component.html',
  styleUrl: './parent-component-ref.component.css'
})
export class ParentComponentRefComponent {
  title = 'Parent interacts with child via local variable';
}
