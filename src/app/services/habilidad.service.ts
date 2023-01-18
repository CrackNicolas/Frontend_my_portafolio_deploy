import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Habilidad from '../schema/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_habilidades(tipo:string) : Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.api_url_backend+"/habilidad/all/tipo/"+tipo);
  }

  public Get_habilidades_estado(estado:string) : Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.api_url_backend+"/habilidad/all/estado/"+estado);
  }

  public Edit_habilidad(id_habilidad:number, habilidad : Habilidad) : void {
    this.http.put(this.api_url_backend+"/habilidad/edit/id/"+id_habilidad,habilidad);
  }

  public Add_habilidad(habilidad : Habilidad) : void {
    this.http.post(this.api_url_backend+"/habilidad/add",habilidad).subscribe(r => {});
  }

  public Delete_habilidad(id_habilidad : number) : void {
    this.http.delete(this.api_url_backend+"/habilidad/delete/id/"+id_habilidad).subscribe(r => {});
  }
}