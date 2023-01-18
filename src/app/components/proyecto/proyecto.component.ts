import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { environment } from 'src/environments/environment';
import Proyecto from '../../schema/proyecto';

import { LoadScriptsService } from '../../services/load-scripts.service'; 

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected title : string = 'AÑADIR PROYECTO';
  protected name_button : string = "REGISTRAR";
  protected proyectos : Proyecto[] = [];

  protected selectedProyecto : Proyecto = this.Limpiar();
  protected selectedTecnologia : string = '';

  protected modal_peticion = "add-proyecto";

  constructor(private proyecto_service : ProyectoService, private load_script:LoadScriptsService) { 
    load_script.load_files("swiper_proyecto");
  }

  ngOnInit(): void {
    this.Instanciar_proyectos();
  }

  private Instanciar_proyectos() : void {
    this.proyecto_service.Get_proyectos().subscribe(
      {
        next : (response : Proyecto[]) => {
          this.proyectos = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }

  protected Add_tecnologia() : void{
    if(this.selectedProyecto.tecnologias_usadas.length==0){
      this.selectedProyecto.tecnologias_usadas += this.selectedTecnologia
    }else{
      this.selectedProyecto.tecnologias_usadas += ','+this.selectedTecnologia
    }
    this.selectedTecnologia = '';
    this.mensaje = 'Tecnologia añadida.';
  }

  protected Get_tecnologias() {
    let array_tecnologias: string[] = [];
    this.selectedProyecto.tecnologias_usadas.split(",").map(i => (
      (i!="")? array_tecnologias.push(i) : ""
    ));
    return array_tecnologias;
  }

  protected Add_edit_proyecto() : void {
    if(this.selectedProyecto.id_proyecto == 0){
      this.proyecto_service.Add_proyecto(this.selectedProyecto);
      this.mensaje = 'Proyecto registrado.';
    }else{
      this.proyecto_service.Edit_proyecto(this.selectedProyecto.id_proyecto,this.selectedProyecto);
      this.mensaje = 'Proyecto actualizado.';
    }
    this.Instanciar_proyectos();
    this.selectedProyecto = this.Limpiar();
  }

  protected Edit_proyecto(proyecto:Proyecto) : void{
    this.title = this.Get_title(proyecto.id_proyecto);
    this.selectedProyecto = proyecto;
  }

  protected Delete_proyecto(id_proyecto:number) : void {
    this.proyecto_service.Delete_proyecto(id_proyecto);
    this.Instanciar_proyectos();
  }

  protected Delete_item_tecnologia(name:string) : void {
    this.selectedProyecto.tecnologias_usadas = this.selectedProyecto.tecnologias_usadas.split(",").filter(i => i != name).toString();
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR PROYECTO" : "EDITAR PROYECTO";
  }

  private Limpiar() : Proyecto {
    return {
      id_proyecto : 0,
      nombre : '',
      url_imagen : '',
      descripcion : '',
      tecnologias_usadas : '',
      link_git : ''
    }
  }

  protected Reiniciar() : void {
    this.Instanciar_proyectos();
    this.selectedProyecto = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
  }
}