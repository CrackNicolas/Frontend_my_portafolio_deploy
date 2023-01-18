import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import Pasatiempo, { Categoria } from '../../schema/pasatiempo';
import { PasatiempoService } from 'src/app/services/pasatiempo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pasatiempos',
  templateUrl: './pasatiempos.component.html',
  styleUrls: ['./pasatiempos.component.css']
})
export class PasatiemposComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected title : string = 'AÑADIR PASATIEMPO';
  protected name_button : string = "REGISTRAR";
  protected pasatiempos : Pasatiempo[] = [];

  protected selectedPasatiempo : Pasatiempo = this.Limpiar();
  protected selectedCategoria = Categoria;

  protected modal_peticion = "add-pasatiempo";

  constructor(private pasatiempo_service : PasatiempoService) { }

  ngOnInit(): void {
    this.Instanciar_pasatiempos();
  }

  protected Ver_icono(name_icon:string) : void{
    this.selectedPasatiempo.nombre_logo = name_icon;
  }

  private Instanciar_pasatiempos() : void {
    this.pasatiempo_service.Get_pasatiempos().subscribe(
      {
        next : (response : Pasatiempo[]) => {
          this.pasatiempos = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }

  protected Add_edit_pasatiempo() : void{
    if(this.selectedPasatiempo.id_pasatiempo == 0){
      this.pasatiempo_service.Add_pasatiempo(this.selectedPasatiempo);
      this.mensaje = 'Pasatiempo registrado.';
    }else{
      this.pasatiempo_service.Edit_pasatiempo(this.selectedPasatiempo.id_pasatiempo,this.selectedPasatiempo);
      this.mensaje = 'Pasatiempo actualizado.';
    }
    this.Instanciar_pasatiempos();
    this.selectedPasatiempo = this.Limpiar();
  }

  protected Edit_pasatiempo(pasatiempo:Pasatiempo) : void {
    this.Reiniciar();
    this.title = this.Get_title(pasatiempo.id_pasatiempo);
    this.selectedPasatiempo = pasatiempo;
  }

  protected Delete_pasatiempo(id_pasatiempo:number) : void {
    this.pasatiempo_service.Delete_pasatiempo(id_pasatiempo);
    this.Instanciar_pasatiempos();
  }

  private Limpiar() : Pasatiempo {
    return {
      id_pasatiempo : 0,
      categoria : Categoria.Otros,
      descripcion : "",
      nombre_logo : ""
    }
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR PASATIEMPO" : "EDITAR PASATIEMPO";
  }

  protected Reiniciar() : void {
    this.Instanciar_pasatiempos();
    this.selectedPasatiempo = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
  }
}