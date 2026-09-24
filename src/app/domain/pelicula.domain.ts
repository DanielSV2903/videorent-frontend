import { Genero } from "./genero.domain";
import { Actor } from  "./actor.domain";

export class Pelicula{
    peliculaId:number;
    titulo:string;
    estreno:boolean;
    subtitulada:boolean;
    genero:Genero;
    actores:Actor[];

    constructor(id?:number,titulo?:string,estreno?:boolean,subtitulada?:boolean,genero?:Genero,actores?:Actor[]){
        this.peliculaId=id ||0;
        this.titulo=titulo ||'';
        this.estreno=estreno || false;
        this.subtitulada=subtitulada || false;
        this.genero=genero || new Genero();
        this.actores=actores || [];
    }
    

}