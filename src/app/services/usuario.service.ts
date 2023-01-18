import Usuario from 'src/app/schema/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_usuario() : Observable<Usuario>{
    return this.http.get<Usuario>(this.api_url_backend+"/usuario/get/id/1");
  }
}