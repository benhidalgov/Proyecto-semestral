import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IngresoPage } from './ingreso.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de que este módulo esté importado
    RouterModule.forChild([{ path: '', component: IngresoPage }])
  ],
  declarations: [IngresoPage]
})
export class IngresoPageModule {}
