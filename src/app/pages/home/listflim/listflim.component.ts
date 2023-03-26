import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listflim',
  templateUrl: './listflim.component.html',
  styleUrls: ['./listflim.component.scss'],
})
export class ListflimComponent {
  @Input() DSPhim: any;
}
