import Persona from '../schema/persona';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Habilidad from '../schema/habilidad';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_persona() : Observable<Persona>{
    return this.http.get<Persona>(this.api_url_backend+"/persona/get/id/1");
  }

  public Edit_persona(persona : Persona) : void {
    this.http.put(this.api_url_backend+"/persona/edit",persona);
  }

  public Get_habilidades() : Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.api_url_backend+"/habilidad/all/tipo/tecnica/estado/uso_actual");
  }

}