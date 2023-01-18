import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import Educacion from '../../schema/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected title : string = 'AÑADIR EDUCACION';
  protected name_button : string = "REGISTRAR";
  protected educaciones : Educacion[] = [];
  protected selectedEducacion : Educacion = this.Limpiar_educacion();

  constructor(private educacion_service : EducacionService) { }

  ngOnInit() : void {
    this.Instanciar_educaciones();
  }

  private Instanciar_educaciones() : void {
    this.educacion_service.Get_educaciones().subscribe(
      {
        next : (response : Educacion[]) => {
          this.educaciones = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    );
  }

  protected Add_edit_educacion() : void{
    if(this.selectedEducacion.id_educacion == 0){
      this.educacion_service.Add_educacion(this.selectedEducacion);
      this.mensaje = 'Educacion registrada.';
    }else{
      this.educacion_service.Edit_educacion(this.selectedEducacion.id_educacion,this.selectedEducacion);
      this.mensaje = 'Educacion actualizada.';
    }
    this.selectedEducacion = this.Limpiar_educacion();
  }

  protected Edit_educacion(educacion:Educacion) : void{
    this.Reiniciar();
    this.title = this.Get_title(educacion.id_educacion);
    this.selectedEducacion = educacion;
  }

  protected Delete_educacion(id_educacion:number) : void {
    this.educacion_service.Delete_educacion(id_educacion); 
    this.Instanciar_educaciones();
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR EDUCACION" : "EDITAR EDUCACION";
  }

  private Limpiar_educacion() : Educacion{
    return {
      id_educacion : 0,
      institucion : "",
      carrera : "",
      fecha_inicio : "",
      fecha_fin : "",
      descripcion : "",
      url_imagen : ""
    }
  }

  protected Reiniciar() : void{
    this.selectedEducacion = this.Limpiar_educacion();
    this.title = this.Get_title(0);
    this.mensaje = undefined;
    this.Instanciar_educaciones();
  }
}