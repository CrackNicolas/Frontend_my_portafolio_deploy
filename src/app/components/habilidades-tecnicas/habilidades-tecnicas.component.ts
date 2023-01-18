import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../services/load-scripts.service';
import Habilidad, { Estado, Tipo } from '../../schema/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-habilidades-tecnicas',
  templateUrl: './habilidades-tecnicas.component.html',
  styleUrls: ['./habilidades-tecnicas.component.css']
})
export class HabilidadesTecnicasComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje:any = undefined;
  protected title : string = "AÑADIR HABILIDAD";
  protected name_button : string = "REGISTRAR";
  protected habilidades : Habilidad[] = [];
  
  protected selectedHabilidad = this.Limpiar();
  protected selectedEstado = Estado;

  protected modal_peticion = "add-habilidad-tecnica";

  constructor(private habilidad_service : HabilidadService, private load_script:LoadScriptsService) { 
    load_script.load_files("theme");
    load_script.load_files("slider_control");
  }

  ngOnInit(): void {
    this.Instanciar_habilidades();
  }

  protected Ver_icono(name_icon:string) : void{
    this.selectedHabilidad.nombre_icono = name_icon;
  }

  private Instanciar_habilidades() : void {
    this.habilidad_service.Get_habilidades("tecnica").subscribe(
      {
        next : (response : Habilidad[]) => {
          this.habilidades = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }

  protected Add_edit_habilidad_tecnica() : void {
    if(this.selectedHabilidad.id_habilidad == 0){
      this.selectedHabilidad.tipo = Tipo.tecnica;
      this.habilidad_service.Add_habilidad(this.selectedHabilidad);
      this.mensaje = 'Habilidad registrada.';
    }else{
      this.habilidad_service.Edit_habilidad(this.selectedHabilidad.id_habilidad,this.selectedHabilidad);
      this.mensaje = 'Habilidad actualizada.';
    }
    this.Instanciar_habilidades();
    this.selectedHabilidad = this.Limpiar();
  }

  protected Edit_habilidad(habilidad:Habilidad) : void{
    this.title = this.Get_title(habilidad.id_habilidad);
    this.selectedHabilidad = habilidad;
  }

  protected Delete_habilidad(id_habilidad:number) : void {
    this.habilidad_service.Delete_habilidad(id_habilidad);
    this.Instanciar_habilidades();
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR HABILIDAD" : "EDITAR HABILIDAD";
  }

  private Limpiar() : Habilidad {
    return {
      id_habilidad : 0,
      nombre : '',
      porcentaje : 0,
      nombre_icono : "",      
      tipo : Tipo.blanda,
      estado : Estado.uso_actual
    }
  }

  protected Reiniciar() : void {
    this.Instanciar_habilidades();
    this.selectedHabilidad = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
  }
}