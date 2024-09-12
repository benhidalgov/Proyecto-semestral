import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {
  correoForm!: FormGroup;  // Non-null assertion (!)

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Inicializar el formulario con las validaciones
    this.correoForm = this.formBuilder.group({
      correo: ['', [
        Validators.required,    // El campo es obligatorio
        Validators.email        // Validación de formato de correo
      ]]
    });
  }

  onSubmit() {
    if (this.correoForm.valid) {
      console.log('Correo válido:', this.correoForm.value.correo);
      // Redirigir a la página de pregunta
      this.router.navigate(['/pregunta']);
    } else {
      console.log('Correo inválido');
    }
  }

  getCorreoErrorMessage() {
    if (this.correoForm.get('correo')?.hasError('required')) {
      return 'El correo es obligatorio';
    }

    if (this.correoForm.get('correo')?.hasError('email')) {
      return 'Formato de correo incorrecto';
    }

    return '';
  }
}
