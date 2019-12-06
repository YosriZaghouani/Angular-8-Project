import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  identifiant:number;
  prix:number;
  nom:String;
 
  constructor(private activatedRoute:ActivatedRoute) { }

ngOnInit() {
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.prix = this.activatedRoute.snapshot.params['prix'];
  this.nom = this.activatedRoute.snapshot.params['nom'];
 
}
}