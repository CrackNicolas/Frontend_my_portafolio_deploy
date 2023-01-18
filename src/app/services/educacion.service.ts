import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Educacion from '../schema/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_educaciones() : Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.api_url_backend+"/educacion/all");
  }

  public Edit_educacion(id_educacion:number, educacion : any) : void {
    this.http.put(this.api_url_backend+"/educacion/edit/id/"+id_educacion,educacion);
  }

  public Add_educacion(educacion : Educacion) : void {
    this.http.post(this.api_url_backend+"/educacion/add",educacion).subscribe(r => {});
  }

  public Delete_educacion(id_educacion : number) : void {
    this.http.delete(this.api_url_backend+"/educacion/delete/id/"+id_educacion).subscribe(r => {});
  }
}