import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {
  respuesta: string = '';
  preguntaSecreta: string = '';
  respuestaIncorrecta: boolean = false;
  usuario: Usuario | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.usuario = navigation.extras.state['usuario'];
      if (this.usuario) {
        this.preguntaSecreta = this.usuario.preguntaSecreta;
      } else {
        this.preguntaSecreta = 'Correo no encontrado';
      }
    }
  }

  onSubmit() {
    if (this.usuario && this.respuesta === this.usuario.respuestaSecreta) {
      this.router.navigate(['/correcto']);
    } else {
      this.router.navigate(['/incorrecto']);
    }
  }
}
