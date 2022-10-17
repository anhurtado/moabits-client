import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientModel } from 'src/app/core/models/client.model';
import { SearchModel } from 'src/app/core/models/search.model';

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
  styleUrls: ['./movement-form.component.scss'],
})
export class MovementFormComponent implements OnInit {
  @Input() clients: ClientModel[] = [];
  @Output() searchEvent = new EventEmitter<SearchModel>();
  public searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get f(): any {
    return this.searchForm.controls;
  }

  public buildForm(): void {
    this.searchForm = this.formBuilder.group({
      clientId: ['', Validators.required],
      fromDate: [''],
      toDate: [''],
      limit: [10],
      page: [1],
    });
  }

  public search(): void {
    const searchModel: SearchModel = this.searchForm.value;
    this.searchEvent.emit(searchModel);
  }
}
