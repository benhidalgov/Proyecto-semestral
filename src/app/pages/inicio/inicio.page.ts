import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, AfterViewInit {
  @ViewChild('titulo', { read: ElementRef }) itemTitulo!: ElementRef;

  public usuario: Usuario | undefined;
  public listaNivelesEducacionales = NivelEducacional.getNivelesEducacionales();
  public componenteActual: string = 'qr';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private animationController: AnimationController
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav && nav.extras.state) {
      this.usuario = nav.extras.state['usuario'];
    } else {
      this.router.navigate(['/ingreso']); // Redirigir si no hay usuario
    }
  }

  ngOnInit(): void { }

  public ngAfterViewInit(): void {
    if (this.itemTitulo) {
      const animation = this.animationController
        .create()
        .addElement(this.itemTitulo.nativeElement)
        .iterations(Infinity)
        .duration(6000)
        .fromTo('transform', 'translate(0%)', 'translate(100%)')
        .fromTo('opacity', 0.2, 1);
      animation.play();
    }
  }

  public cerrarSesion() {
    // Implementar lógica para cerrar sesión
    this.router.navigate(['/ingreso']); // Redirigir a ingreso al cerrar sesión
  }

  public mostrarDatosPersonales() {
    // Implementar lógica para mostrar datos personales
  }

  public async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  public formatDateDDMMYYYY(date: Date | undefined): string {
    if (!date) return 'No asignada';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Agrega más métodos según sea necesario
}
