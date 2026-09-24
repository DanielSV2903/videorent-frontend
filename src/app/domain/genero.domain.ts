export class Genero {
    generoId:number;
    nombreGenero:string;
    constructor(id?:number,nombre?:string){
        this.generoId=id || 0;
        this.nombreGenero=nombre ||'';
    }
    

}