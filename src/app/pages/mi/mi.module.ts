import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPageRoutingModule } from './mi-routing.module';

import { MiPage } from './mi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPageRoutingModule
  ],
  declarations: [MiPage]
})
export class MiPageModule {}
