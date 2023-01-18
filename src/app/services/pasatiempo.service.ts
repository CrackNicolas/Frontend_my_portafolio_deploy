import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Pasatiempo from '../schema/pasatiempo';

@Injectable({
  providedIn: 'root'
})
export class PasatiempoService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_pasatiempos() : Observable<Pasatiempo[]>{
    return this.http.get<Pasatiempo[]>(this.api_url_backend+"/pasatiempo/all");
  }

  public Edit_pasatiempo(id_pasatiempo:number, pasatiempo : Pasatiempo) : void{
    this.http.put(this.api_url_backend+"/pasatiempo/edit/id/"+id_pasatiempo,pasatiempo);
  }

  public Add_pasatiempo(pasatiempo : Pasatiempo) : void{
    this.http.post(this.api_url_backend+"/pasatiempo/add",pasatiempo).subscribe(r => {});
  }

  public Delete_pasatiempo(id_pasatiempo : number) : void{
    this.http.delete(this.api_url_backend+"/pasatiempo/delete/id/"+id_pasatiempo).subscribe(r => {});
  }
}