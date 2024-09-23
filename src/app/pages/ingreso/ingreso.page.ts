import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  public correo: string; // Declarar la propiedad correo
  public password: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {
    this.correo = ''; // Inicializar correo
    this.password = '';
  }

  ngOnInit() { }

  public ingresarPaginaValidarCorreo(): void {
    this.router.navigate(['/correo']);
  }

  public ingresar() {
    if (!this.correo.trim() || !this.password.trim()) {
      this.mostrarMensaje('Por favor, ingrese correo y contraseña.');
      return;
    }

    // Buscar el usuario en la lista
    const usu: Usuario | undefined = Usuario.getListarUsuarios().find(
      user => user.correo === this.correo.trim() && user.password === this.password.trim()
    );

    if (usu) {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usu
        }
      };
      this.mostrarMensaje('¡Bienvenido(a) al sistema de asistencia DUOC');
      console.log('Redireccionando a inicio...', usu);
      this.router.navigate(['/inicio'], navigationExtras);
    } else {
      this.mostrarMensaje('Correo o contraseña incorrectos');
    }
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }
}
