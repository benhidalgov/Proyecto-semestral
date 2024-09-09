import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPageRoutingModule } from './mis-routing.module';

import { MisPage } from './mis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPageRoutingModule
  ],
  declarations: [MisPage]
})
export class MisPageModule {}
