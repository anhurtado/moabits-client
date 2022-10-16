import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleGuard } from 'src/app/core/guards/title.guard';
import { MovementIndexComponent } from './containers/movement-index/movement-index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    canActivate: [TitleGuard],
    data: { title: 'Movements' },
    component: MovementIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementRoutingModule {}
