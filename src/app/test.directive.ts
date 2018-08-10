import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  constructor() { }
  @HostBinding('style.color') textColor: String = 'blue';
  @HostListener('mouseover') onMouseOver() {
    this.textColor = 'red';
  }
}
