import { Genero } from "./genero.domain";
import { Actor } from  "./actor.domain";

export interface Pelicula{
    peliculaId:number;
    titulo:string;
    estreno:boolean;
    subtitulada:boolean;
    genero:Genero;
    actores:Actor[];
}