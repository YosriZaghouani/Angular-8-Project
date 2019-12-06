import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutComponent } from './aut/aut.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ModifierComponent } from './modifier/modifier.component';


@NgModule({
  declarations: [
    AppComponent,
    AutComponent,
    BoutiqueComponent,
    AcceuilComponent,
    AjouterproduitComponent,
    ErreurComponent,
    DetailComponent,
    ModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
