import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: async () =>
      await import('./home/home.module')
        .then((modulo) => modulo.HomeModule),
  },
  {
    path: 'animais',
    loadChildren: async () =>
      await import('./animais/animais.module')
        .then((modulo) => modulo.AnimaisModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

