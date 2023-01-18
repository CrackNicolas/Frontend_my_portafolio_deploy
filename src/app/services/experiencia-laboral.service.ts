import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Experiencia_laboral from '../schema/experiencia_laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_experiencias_laborales() : Observable<Experiencia_laboral[]>{
    return this.http.get<Experiencia_laboral[]>(this.api_url_backend+"/experiencia_laboral/all");
  }

  public Edit_experiencia_laboral(id_experiencia:number, experiencia_laboral : Experiencia_laboral) : void{
    this.http.put(this.api_url_backend+"/experiencia_laboral/edit/id/"+id_experiencia,experiencia_laboral);
  }
 
  public Add_experiencia_laboral(experiencia_laboral : Experiencia_laboral) : void{
    this.http.post(this.api_url_backend+"/experiencia_laboral/add",experiencia_laboral).subscribe(r => {});
  }

  public Delete_experiencia_laboral(id_experiencia : number) {
    this.http.delete(this.api_url_backend+"/experiencia_laboral/delete/id/"+id_experiencia).subscribe(r => {});
  }
}