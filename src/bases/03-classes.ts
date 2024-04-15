import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

// forma mejorada / corta
export class Pokemon {

       
        

         get imageUrl():string {
             return `https://pokemon.com/${this.id}.jpg`
         }

    constructor( 
         public readonly id : number,
          public name: string,
          //public imageUrl: string,
          ) {}

          /**
           * metodo = funccion 
           * scream ... hacemos que el poke grite
           */
          //public
           scream() {
            console.log(`${ this.name.toUpperCase() } !!!!`);
          }

          // private hace que puedas usarlo en la misma pagina
          //private 
          speak() {
            console.log(`${ this.name }, ${ this.name }`);
            
          }
          //cuando eliges el modelo al get ya te sale en getMoves() el tipo , se pone para verlo mejor (: Promise<Move[]>)
          async getMoves(): Promise<Move[]> {
            // const moves = 10;
            //                               con CTRL + . se puede inportar
            const { data } = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4")

            console.log(data.moves);
            
            return data.moves;
            
          }
    
}

export const charmander = new Pokemon(4,"Charmander")

console.log(charmander.getMoves());


// charmander.scream()


// se puede usar como cualquier valor el geter
//console.log(charmander.imageUrl);




// charmander.id = 3
// charmander.name = "ryolu"

/**
 * // basica
 * 
export class Pokemon {
    public id:number ;
    public name:string ;

    constructor( id : number, name: string) {
        this.id = id;
        this.name = name;

        console.log("llamada constructor");
        
    }
    
}
 */