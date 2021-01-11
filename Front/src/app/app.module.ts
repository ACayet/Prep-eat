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
import { AccueilComponent } from './receipe/accueil/accueil.component';
import { NotFound404Component } from './not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NotFound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return JSON.parse(sessionStorage.getItem('USER')).jwtToken;
        },
        allowedDomains: ['localhost:8443'],
        disallowedRoutes: ['https://localhost:8443/api/v1/users/login','https://localhost:8443/api/v1/users/register'],
        skipWhenExpired: true
      }   
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }