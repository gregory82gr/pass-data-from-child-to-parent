import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component-vc',
  templateUrl: './child-component-vc.component.html',
  styleUrl: './child-component-vc.component.css'
})
export class ChildComponentVcComponent {
  countVC = 0;

     increment() {
        this.countVC++;
      }
    decrement() {
        this.countVC--;
    }
}
