import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { AutComponent } from './aut/aut.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import{ErreurComponent } from './erreur/erreur.component';
import { DetailComponent } from './detail/detail.component';
import { ModifierComponent } from './modifier/modifier.component';


const routes: Routes = 
[
  {path:'acceuil', component:AcceuilComponent},
  {path:'boutique', component:BoutiqueComponent},
  {path:'aut', component:AutComponent},
  {path:'ajouterproduit', component:AjouterproduitComponent},
  {path:'modifier', component:ModifierComponent},
  {path:'detail/:id/:nom/:prix', component:DetailComponent},
  {path:'', redirectTo:'acceuil',pathMatch:'full'},
  {path:'**', component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
