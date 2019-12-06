import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';


@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css']
})
export class AjouterproduitComponent implements OnInit {
  productForm=new FormGroup(
    {
    id: new FormControl('',Validators.required),
    nom:new FormControl('',Validators.required),
    prix:new FormControl('',[Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')]),
    image:new FormControl('',Validators.required),
    disponible:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required)
  });
  constructor(private produitservice:ProduitService) { }

  ngOnInit() {
  }
  onSubmitForm()
  {
    let ajout:boolean;
    ajout=this.produitservice.ajout(this.productForm.get('id').value,
    this.productForm.get('nom').value,
    this.productForm.get('prix').value,
    this.productForm.get('image').value,
    this.productForm.get('disponible').value,
    this.productForm.get('date').value);
    console.log(ajout);
  }
  

}