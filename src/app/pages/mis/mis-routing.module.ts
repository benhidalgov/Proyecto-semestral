import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPage } from './mis.page';

const routes: Routes = [
  {
    path: '',
    component: MisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPageRoutingModule {}
