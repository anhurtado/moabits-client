import { NgModule } from '@angular/core';
import { MovementRoutingModule } from './movement.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovementIndexComponent } from './containers/movement-index/movement-index.component';

@NgModule({
  declarations: [
    MovementIndexComponent
  ],
  imports: [MovementRoutingModule, SharedModule],
})
export class MovementModule {}
