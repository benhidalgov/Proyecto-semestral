import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  public cuenta: string;
  public password: string;

  public usuario: Usuario;

  constructor(
    private toastController: ToastController,
    private router: Router)
    {
    this.cuenta = '';
    this.password = '';
    this.usuario = new Usuario('','','','','','','',
    NivelEducacional.findNivelEducacionalById(1)!, undefined);
    this.usuario.cuenta = 'jvalenzuela';
    this.usuario.password = '1234';
  }

  ngOnInit() {

  }

  public ingresar(){
    if (this.usuario) {
      if (!this.validarUsuario(this.usuario)) return;
        const usu: Usuario | undefined = this.usuario.buscarUsuarioValido(
          this.usuario.cuenta, this.usuario.password);

        if (usu) {
          const extras: NavigationExtras = {
            state: {
              usuario: usu
            }
          }
          this.mostrarMensaje('¡Bienvenido(a) al sistema de asistencia DUOC')
          this.router.navigate(['/inicio'], extras)
        }
     }
  }

  public validarUsuario(usuario: Usuario): boolean{
    const mensajeError = usuario.validarCuenta();
    if(mensajeError){
      this.mostrarMensaje(mensajeError)
      return false;
    }
    return true;
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion? duracion: 2000
    });
    toast.present();
  }


}