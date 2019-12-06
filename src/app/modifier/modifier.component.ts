import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../boutique/produit';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  productForm2=new FormGroup(
    {
    id: new FormControl('')
 
  });



  productForm3=new FormGroup(
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
    let test:boolean;
    test=this.produitservice.delete(this.productForm2.get('id').value);
  }

/*
  onSubmitForm3()
  {
    let update:boolean;
    update=this.produitservice.update(this.productForm3.get('id').value,
    this.productForm3.get('nom').value,
    this.productForm3.get('prix').value,
    this.productForm3.get('image').value,
    this.productForm3.get('disponible').value,
    this.productForm3.get('date').value);
    console.log(update);
  }*/



}
