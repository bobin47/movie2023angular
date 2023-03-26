import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent {
  @Input() ghe: any;
  @Output() emit = new EventEmitter();
  styleBtn: string = 'primary';
  public static: any;

  datghe() {
    if (this.static) {
      this.styleBtn = 'primary';
      this.static = false;
    } else {
      this.styleBtn = 'accent';
      this.static = true;
    }
    this.emit.emit(this.static);
  }
}
