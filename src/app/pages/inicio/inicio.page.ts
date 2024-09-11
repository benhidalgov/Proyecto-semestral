import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  cuenta: string;

  constructor(private activatedRoute : ActivatedRoute, private router: Router) {
    this.cuenta = '';
    this.activatedRoute.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation) {
        if (navigation.extras.state){
          this.cuenta = navigation.extras.state['cuenta'];
        }else{
          this.router.navigate(['ingreso'])
        }
      }
    });
   }

  ngOnInit() {
  }

}
