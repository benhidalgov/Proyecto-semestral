import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CorreoPage } from './correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Asegurarse de importar ReactiveFormsModule aquí
    IonicModule,
    RouterModule.forChild([{ path: '', component: CorreoPage }])
  ],
  declarations: [CorreoPage]
})
export class CorreoPageModule { }
