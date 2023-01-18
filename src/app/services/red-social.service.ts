import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Red_social from '../schema/red_social';

@Injectable({
  providedIn: 'root'
})
export class RedSocialService {
  private api_url_backend = environment.api_url_backend;

  constructor(private http : HttpClient) { }

  public Get_redes_sociales() : Observable<Red_social[]>{
    return this.http.get<Red_social[]>(this.api_url_backend+"/red_social/all");
  }

  public Add_red_social(red_social : Red_social) : void{
    this.http.post(this.api_url_backend+"/red_social/add",red_social).subscribe(r => {});
  }

  public Delete_red_social(id_red_social:number) : void {
    this.http.delete(this.api_url_backend+"/red_social/delete/id/"+id_red_social).subscribe(r => {});
  }
}