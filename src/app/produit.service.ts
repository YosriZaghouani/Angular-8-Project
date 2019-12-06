import { Injectable } from '@angular/core';
import { Produit } from './boutique/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
produits=[new Produit(1,"Blue UCLA xYoung&Fresh T-shirt",199.00,"/assets/images/item3.jpg",false,new Date(2016,2,2)),
new Produit(2,"Grey wool blend check print coat",134,"/assets/images/bckg.jpg",true,new Date(2014,2,2)),  
new Produit(3,"Basic hooded denim jacket",89.00,"/assets/images/item6.jpg",true,new Date(2014,2,2)),
new Produit(4,"Grey wool blend check print coat",859.00,"assets/images/item4.jpg",false,new Date(2015,2,2)),
new Produit(5,"White UCLA xYoung&Fresh T-shirte",179.00,"/assets/images/bonnet.jpg",false,new Date(2018,2,2)),
new Produit(6,"UCLA xYoung&Fresh seal hoodie",299.00,"/assets/images/item2.jpg",true,new Date(2016,2,2))


];
  constructor() { }

 




  public ajout(id:number,nom:string,prix:number,image:string,disponible:boolean,date:Date):boolean{
    let test:boolean;
this.produits.push(new Produit(id,nom,prix,image,disponible,date));
    test=true;
    return test;
  }






public delete(id:number):boolean{
  let i:number=0;
  let test:boolean;
  while(this.produits[i].id != id)
  {
    i++;
  }
  if(this.produits[i].id ==id)
  {
    this.produits.splice(i,1);
    test=true;
  }
  else test=false;
  return test;
}

/*
public update(id:number,nom:string,prix:number,image:string,disponible:boolean,date:Date):boolean{
  let test:boolean;
this.produits.update(id,nom,prix,image,disponible,date);
  test=true;
  return test;
}*/

}
 



