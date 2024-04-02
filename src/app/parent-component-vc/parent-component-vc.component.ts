import { Component, ViewChild } from '@angular/core';
import { ChildComponentVcComponent } from '../child-component-vc/child-component-vc.component';

@Component({
  selector: 'app-parent-component-vc',
  templateUrl: './parent-component-vc.component.html',
  styleUrl: './parent-component-vc.component.css'
})
export class ParentComponentVcComponent {
  title = 'Parent calls an @ViewChild()';

  @ViewChild(ChildComponentVcComponent,{static:true}) child: ChildComponentVcComponent;

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }
}
