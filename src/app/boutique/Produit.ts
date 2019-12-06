export class Produit{
    public id:number;
public nom:String;
public prix:number;
public image:String;
public disponible:boolean;
public date:Date;

constructor(id,nom,prix,image,disponible,date){
this.id=id;
this.nom=nom;
this.prix=prix;
this.image=image;
this.disponible=disponible;
this.date=date;
}
}