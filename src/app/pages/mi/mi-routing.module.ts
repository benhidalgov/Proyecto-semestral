import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiPage } from './mi.page';

const routes: Routes = [
  {
    path: '',
    component: MiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiPageRoutingModule {}
