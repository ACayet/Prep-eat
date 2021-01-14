import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

import { JwtModule } from '@auth0/angular-jwt';

/* Http */
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './recipe/accueil/accueil.component';
import { NotFound404Component } from './not-found404/not-found404.component';

import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NotFound404Component,
    AddRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          
          return JSON.parse(sessionStorage.getItem('USER')).jwtToken;
        },
        allowedDomains: ["prep-eat.ml"],
        disallowedRoutes: [environment.apiURL + '/users/login',environment.apiURL + '/users/register'],
        skipWhenExpired: true
      }   
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
