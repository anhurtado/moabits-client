import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MovementModel } from 'src/app/core/models/movement.model';

@Component({
  selector: 'app-movement-table',
  templateUrl: './movement-table.component.html',
  styleUrls: ['./movement-table.component.scss'],
})
export class MovementTableComponent implements OnInit {
  @Input() movements: MovementModel[] = [];
  public displayedColumns: string[] = [
    'id',
    'account_number',
    'name',
    'amount',
    'balance',
    'created_at',
  ];
  public dataSource = new MatTableDataSource<MovementModel>(this.movements);

  constructor() {}

  ngOnInit(): void {
    console.log(this.movements);
    this.dataSource.data = this.movements;
  }
}
