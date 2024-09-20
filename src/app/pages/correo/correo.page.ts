import { Usuario } from './../../model/Usuario';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  correoForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.correoForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  public onSubmit(): void {
    if (this.correoForm.valid) {
      const correoIngresado = this.correoForm.value.correo;

      const usuariosValidos: Usuario[] = Usuario.getListarUsuarios(); // Cambia a usar el método correcto
      const usuarioEncontrado = usuariosValidos.find(usuario => usuario.correo === correoIngresado);

      if (!usuarioEncontrado) {
        alert('¡El correo no existe!');
      } else {
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: usuarioEncontrado // Asegúrate de que `usuario` tenga el tipo correcto
          }
        };
        this.router.navigate(['/pregunta'], navigationExtras);
      }
    } else {
      alert('Por favor, ingresa un correo válido.');
    }
  }

  public getCorreoErrorMessage(): string {
    const control = this.correoForm.get('correo');
    if (control?.hasError('required')) {
      return 'Debes ingresar un correo';
    }
    if (control?.hasError('email')) {
      return 'Correo inválido';
    }
    return '';
  }

}
