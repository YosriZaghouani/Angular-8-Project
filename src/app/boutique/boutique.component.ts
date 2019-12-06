import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
produit=[];
  constructor( private produitService:ProduitService) { }

  ngOnInit() {
    this.produit=this.produitService.produits;
  }

}
