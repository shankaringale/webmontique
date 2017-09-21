import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//import { CreditCardDirectivesModule } from 'ng2-cc-library'
/***     Coponents       ***/
import { AppComponent } from './app.component';
import { AppSettings } from './appSettings'
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './errors/404.component';
import { NewComponent } from './users/new.component'
import { ExistingUserComponent } from './users/existing.component'
import { AnnuelComponent } from './contracts/annual/annuel-contract.component'
import { AnnuelAdslComponent } from './contracts/annual/adsl/annuel-adsl.component'
import { AnnuelGprsComponent } from './contracts/annual/gprs/annuel-gprs.component'
import { AnnuelAdslFixedComponent } from './contracts/annual/adsl/fixed/annuel-adsl-fixed.component'
import { AnnuelAdslPortablesComponent } from './contracts/annual/adsl/portables/annuel-adsl-portables.component'
import { AnnuelGprsFixedComponent } from './contracts/annual/gprs/fixed/annuel-gprs-fixed.component'
import { AnnuelGprsPortablesComponent } from './contracts/annual/gprs/portables/annuel-gprs-portables.component'
import { PremiumComponent } from './contracts/premium/premium.component'
import { PremiumAdslComponent } from './contracts/premium/adsl/premium-adsl.component'
import { PremiumAdslFixedComponent } from './contracts/premium/adsl/fixed/premium-adsl-fixed.component'
import { PrmiumAdslPortablesComponent } from './contracts/premium/adsl/portables/premium-adsl-portables.component'
import { PremiumGprsComponent } from './contracts/premium/gprs/premium-gprs.component'
import { PremiumGprsFixedComponent } from './contracts/premium/gprs/fixed/premium-gprs-fixed.component'
import { PremiumGprsPortablesComponent } from './contracts/premium/gprs/portables/premium-gprs-portables.component'
import { PrmiumTpePortableAdslComponent } from './contracts/premium/adsl/portables/forms/full-services-tpe-portable-adsl.component'
/***   Services   ***/

import { GenralService } from './genral.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    Error404Component,
    NewComponent,
    ExistingUserComponent,
    AnnuelComponent,
    AnnuelAdslComponent,
    AnnuelGprsComponent,
    AnnuelAdslFixedComponent,
    AnnuelAdslPortablesComponent,
    AnnuelGprsFixedComponent,
    AnnuelGprsPortablesComponent,
    PremiumComponent,
    PremiumAdslComponent,
    PremiumAdslFixedComponent,
    PrmiumAdslPortablesComponent,
    PremiumGprsComponent,
    PremiumGprsFixedComponent,
    PremiumGprsPortablesComponent,
    PrmiumTpePortableAdslComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'première-demande', component: NewComponent, pathMatch: 'full'},
      { path: 'contrats-de-location-annuelle', component: AnnuelComponent, pathMatch: 'full'},
      { path: 'contrats-de-location-annuelle-adsl', component: AnnuelAdslComponent, pathMatch: 'full'},
      { path: 'contrats-de-location-annuelle-adsl-fixed', component: AnnuelAdslFixedComponent, pathMatch: 'full'},
      { path: 'contrats-de-location-annuelle-adsl-portables', component: AnnuelAdslPortablesComponent, pathMatch: 'full'},
      { path: 'contrats-de-location-annuelle-gprs', component: AnnuelGprsComponent, pathMatch: 'full'},
      { path: 'contrats-de-location-annuelle-gprs-fixed', component: AnnuelGprsFixedComponent, pathMatch: 'full'},
      { path: 'contrats-de-location-annuelle-gprs-portables', component: AnnuelGprsPortablesComponent, pathMatch: 'full'},
      { path: 'contrats-premium', component: PremiumComponent, pathMatch: 'full'},
      { path: 'contrats-premium-adsl', component: PremiumAdslComponent, pathMatch: 'full'},
      { path: 'contrats-premium-adsl-fixed', component: PremiumAdslFixedComponent, pathMatch: 'full'},
      { path: 'contrats-premium-adsl-portables', component: PrmiumAdslPortablesComponent, pathMatch: 'full'},
      { path: 'contrats-premium-gprs', component: PremiumGprsComponent, pathMatch: 'full'},
      { path: 'contrats-premium-gprs-fixed', component: PremiumGprsFixedComponent, pathMatch: 'full'},
      { path: 'contrats-premium-gprs-portables', component: PremiumGprsPortablesComponent, pathMatch: 'full'},
      { path: 'contrat-location-annuelle-full-services-tpe-portable-adsl', component: PrmiumTpePortableAdslComponent, pathMatch: 'full'},
      { path: 'existing-customer-contracts', component: ExistingUserComponent, pathMatch: 'full'},
      { path: '404', component: Error404Component},
      { path: '**', redirectTo: "404"},
    ]),
    HttpModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GenralService, AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
