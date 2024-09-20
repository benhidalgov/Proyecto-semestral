import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },

  {
    path: 'correo',
    loadChildren: () => import('./pages/correo/correo.module').then(m => m.CorreoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then(m => m.IngresoPageModule)
  },
  {
    path: 'correcto',
    loadChildren: () => import('./pages/correcto/correcto.module').then(m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./pages/incorrecto/incorrecto.module').then(m => m.IncorrectoPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pages/pregunta/pregunta.module').then(m => m.PreguntaPageModule)
  },
  {
    path: 'miclase',
    loadChildren: () => import('./pages/miclase/miclase.module').then(m => m.MiclasePageModule)
  },
  {
    path: 'misdatos',
    loadChildren: () => import('./pages/misdatos/misdatos.module').then(m => m.MisdatosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }