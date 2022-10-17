import { ParsedVariable } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MovementModel } from 'src/app/core/models/movement.model';
import { SearchModel } from 'src/app/core/models/search.model';

@Component({
  selector: 'app-movement-table',
  templateUrl: './movement-table.component.html',
  styleUrls: ['./movement-table.component.scss'],
})
export class MovementTableComponent
  implements OnInit, OnChanges, AfterViewInit
{
  @Output() newPage = new EventEmitter<number>();
  @Input() movements: MovementModel[] = [];
  public movementList: MovementModel[] = [];
  @Input() totalRows: number = 0;
  public pageSize: number = 0;
  public currentPage: number = 0;
  public pageSizeOptions: number[] = [2];
  public isLoading: boolean = false;
  public displayedColumns: string[] = [
    'id',
    'account_number',
    'name',
    'amount',
    'balance',
    'created_at',
  ];
  public dataSource: MatTableDataSource<MovementModel> =
    new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.movementList = this.movements;
    this.dataSource.data = this.movementList;
  }

  ngOnChanges(): void {
    this.movements.map((item) => {
      if (this.movementList.find((o) => o.id === item.id) === undefined) {
        this.movementList.push(item);
      }
    });
    this.dataSource.data = this.movementList;
    this.isLoading = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.isLoading = true;
    this.newPage.emit(this.currentPage + 1);
  }
}
