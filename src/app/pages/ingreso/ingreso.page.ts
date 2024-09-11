import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  public cuenta: string;
  public password: string;

  constructor(private router: Router) {
    this.cuenta = '';
    this.password = '';
  }

  ngOnInit() {
  }

  acceder() {
    if (this.cuenta == 'jvalenzuela' && this.password == '123') {

      const extras: NavigationExtras = {
        state: {
          cuenta: this.cuenta
        }
      };

        this.router.navigate(['inicio'], extras);

    } else {
      alert('incorrecto');
    }
  }
}
