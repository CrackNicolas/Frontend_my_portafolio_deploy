import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import { environment } from 'src/environments/environment';
import Experiencia_laboral from '../../schema/experiencia_laboral';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected title : string = 'AÑADIR EXPERIENCIA';
  protected name_button : string = "REGISTRAR";
  protected experiencias_laborales : Experiencia_laboral[] = [];
  protected selectedExperiencia : Experiencia_laboral = this.Limpiar();

  constructor(private experiencia_laboral_service : ExperienciaLaboralService) { }

  ngOnInit(): void {
    this.Instanciar_experiencias_laborales();
  }

  private Instanciar_experiencias_laborales() : void {
    this.experiencia_laboral_service.Get_experiencias_laborales().subscribe(
      {
        next : (response : Experiencia_laboral[]) => {
          this.experiencias_laborales = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }

  protected Add_edit_experiencia() : void{
    if(this.selectedExperiencia.id_experiencia == 0){
      this.experiencia_laboral_service.Add_experiencia_laboral(this.selectedExperiencia);
      this.mensaje = 'Experiencia registrada.';
    }else{
      this.experiencia_laboral_service.Edit_experiencia_laboral(this.selectedExperiencia.id_experiencia,this.selectedExperiencia);
      this.mensaje = 'Experiencia actualizada.';
    }
    this.selectedExperiencia = this.Limpiar();
  }

  protected Edit_experiencia(experiencia:Experiencia_laboral) : void{
    this.title = this.Get_title(experiencia.id_experiencia);
    this.selectedExperiencia = experiencia;
  }

  protected Delete_experiencia(id_experiencia:number) : void{
    this.experiencia_laboral_service.Delete_experiencia_laboral(id_experiencia);
    this.Instanciar_experiencias_laborales();
  }

  private Limpiar() : Experiencia_laboral{
    return {
      id_experiencia : 0,
      empresa : "",
      puesto : "",
      fecha_inicio : "",
      fecha_fin : "",
      url_imagen : "",
      descripcion : ""
    }
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR EXPERIENCIA" : "EDITAR EXPERIENCIA";
  }

  protected Reiniciar() : void{
    this.selectedExperiencia = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
    this.Instanciar_experiencias_laborales();
  }
}