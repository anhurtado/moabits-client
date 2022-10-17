import { NgModule } from '@angular/core';
import { MovementRoutingModule } from './movement.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovementIndexComponent } from './containers/movement-index/movement-index.component';
import { MovementFormComponent } from './components/movement-form/movement-form.component';
import { MovementTableComponent } from './components/movement-table/movement-table.component';
import { MovementBalanceComponent } from './components/movement-balance/movement-balance.component';

@NgModule({
  declarations: [
    MovementIndexComponent,
    MovementFormComponent,
    MovementTableComponent,
    MovementBalanceComponent
  ],
  imports: [MovementRoutingModule, SharedModule],
})
export class MovementModule {}
