import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Proyecto from '../schema/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_proyectos() : Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.api_url_backend+"/proyecto/all");
  }

  public Add_proyecto(proyecto : Proyecto) : void{
    this.http.post(this.api_url_backend+"/proyecto/add",proyecto).subscribe(r => {});
  }

  public Edit_proyecto(id_proyecto:number, proyecto : Proyecto) : void{
    this.http.put(this.api_url_backend+"/proyecto/edit/id/"+id_proyecto,proyecto);
  }

  public Delete_proyecto(id_proyecto:number) : void{
    this.http.delete(this.api_url_backend+"/proyecto/delete/id/"+id_proyecto).subscribe(r => {});
  }
}