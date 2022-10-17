import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movement-balance',
  templateUrl: './movement-balance.component.html',
  styleUrls: ['./movement-balance.component.scss'],
})
export class MovementBalanceComponent {
  @Input() balance: number = 0.0;
}
