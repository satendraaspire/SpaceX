import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dragon-dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dragon-dashboard',
    loadChildren: () =>
      import('./dragon/dragon-routing.module').then(
        (m) => m.DragonRoutingModule
      ),
    title: 'Dragon Dashboard',
  },
  {
    path: '',
    loadChildren: () =>
      import('./capsules/capsules-routing.module').then(
        (m) => m.CapsulesRoutingModule
      ),
  },

  {
    path: '',
    loadChildren: () =>
      import('./landpads/landpads-routing.module').then(
        (m) => m.LandpadsRoutingModule
      ),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Fount',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule],
})
export class AppRoutingModule {}
