import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//import { CreditCardDirectivesModule } from 'ng2-cc-library'
/***     Coponents       ***/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './errors/404.component';
import { NewComponent } from './users/new.component'
import { ExistingUserComponent } from './users/existing.component'

/***   Services   ***/

import { GenralService } from './genral.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    NewComponent,
    ExistingUserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'première-demande', component: NewComponent, pathMatch: 'full'},
      { path: 'existing-customer-contracts', component: ExistingUserComponent, pathMatch: 'full'},
      { path: '404', component: Error404Component},
      { path: '**', redirectTo: "404"},
    ]),
    HttpModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GenralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
