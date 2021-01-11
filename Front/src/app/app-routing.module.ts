import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AccueilComponent } from './receipe/accueil/accueil.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'accueil', canActivate: [AuthGuard], component: AccueilComponent },
  { path: '404', component: NotFound404Component},
  { path: '**', redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
