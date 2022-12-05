import { Commentaire } from "./commentaire";

export class Voiture {
    constructor(
        public id : number, //identifiant
        public Marque : string,
        public Photo : string,
        public Prix : number,
        public Location : string,
        public Typedecarbirant : string,
        public nbplace : number,
        public gear : string,
        public Dispo : boolean,
        //public Commentaires : Commentaire[]
    ){

    }
}
