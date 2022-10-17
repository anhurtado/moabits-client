import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/core/models/client.model';
import { MovementModel } from 'src/app/core/models/movement.model';
import { SearchModel } from 'src/app/core/models/search.model';
import { ClientService } from 'src/app/core/services/client.service';
import { MovementService } from 'src/app/core/services/movement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movement-index',
  templateUrl: './movement-index.component.html',
  styleUrls: ['./movement-index.component.scss'],
})
export class MovementIndexComponent implements OnInit {
  public clients: ClientModel[] = [];
  public movements: MovementModel[] = [];
  public balance: number = 0.0;
  public total: number = 0;
  public searchModel!: SearchModel;

  constructor(
    private clientService: ClientService,
    private movementService: MovementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  public fetchClients(): void {
    this.clientService.list().subscribe({
      next: (rm: any) => {
        this.clients = rm;
      },
      error: (err) => {
        const error: any = err.error;
        Swal.fire({
          title: 'Ups something happened, please try again',
          text: error.message,
          icon: 'warning',
        });
      },
    });
  }

  public newPage(event: number): void {
    this.searchModel.page = event;
    this.fetchMovements(this.searchModel);
  }

  public fetchMovements(searchModel: SearchModel): void {
    this.searchModel = searchModel;
    this.movementService.list(searchModel).subscribe({
      next: (rm: any) => {
        this.movements = [];
        this.movements = rm.items;
        this.balance = rm.balance;
        this.total = rm.total;
        if (this.movements.length === 0) {
          Swal.fire({
            title: 'No records found',
            text: 'Select a different date range',
            icon: 'info',
          });
        }
      },
      error: (err) => {
        const error: any = err.error;
        Swal.fire({
          title: 'Ups something happened, please try again',
          text: error.message,
          icon: 'warning',
        });
      },
    });
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
