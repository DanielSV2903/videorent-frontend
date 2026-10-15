import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pelicula } from '../domain/pelicula.domain';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
private apiUrl =`${environment.API_URL}peliculas`;
constructor(private http:HttpClient){ }

findMovies(titulo:string='',genero:string=''):Observable<Pelicula[]>{
  const params = new HttpParams()
  .set('titulo', titulo??'')
  .set('genero', genero);
  //Peticion http GET
  return this.http.get<Pelicula[] | null>(this.apiUrl, {params}).pipe(map(response=>response?? [] ));
}

 guardarPelicula(pelicula: any): Observable<Pelicula> { // Usar 'any' o la interface Pelicula
    return this.http.post<any>(this.apiUrl, pelicula);
  }


}
