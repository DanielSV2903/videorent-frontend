import { inject, Injectable } from '@angular/core';
import { Genero } from '../domain/genero.domain';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  private http = inject(HttpClient); // inyección de HttpClient
  private url:string = environment.API_URL;
  // Patrón reactivo para obtener los géneros
  // HttpClient.get devuelve un Observable, lo que permite suscribirse a los cambios de datos en tiempo real
  generos = this.http.get<Genero[]>(`${this.url}generos`);

public getGeneros():Observable<Genero[]>{
  return this.generos;
}
  constructor() {  }
 }
