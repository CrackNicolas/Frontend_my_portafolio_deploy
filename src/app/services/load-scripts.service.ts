import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor() { }

  public load_files(file:string) : void{
    let script = document.createElement("script");
    script.src = "../../assets/controllers/"+file+".js";
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(script);
  }
}
