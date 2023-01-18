import { PresentacionService } from './../../services/presentacion.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import Habilidad from '../../schema/habilidad';
import Persona from '../../schema/persona';

import { LoadScriptsService } from '../../services/load-scripts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected presentacion : Persona = this.Limpiar_presentacion();
  protected tecnologias : Habilidad[] = [];

  constructor(private presentacion_service : PresentacionService, private load_script:LoadScriptsService) { 
    load_script.load_files("theme");
  } 

  ngOnInit(): void {
    this.Instanciar_presentacion();
    this.Instanciar_tecnologias_de_manejo_actual();
  }

  private Instanciar_presentacion(){
    this.presentacion_service.Get_persona().subscribe(
      {
        next : (response : Persona) => {
          this.presentacion = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }
  
  private Instanciar_tecnologias_de_manejo_actual() : void {
    this.presentacion_service.Get_habilidades().subscribe(
      {
        next : (response : Habilidad[]) => {
          this.tecnologias = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }

  protected Get_tecnologias(mitad:string) : Habilidad []{
    return (mitad==="start")? this.tecnologias.slice(0,this.tecnologias.length/2) : this.tecnologias.slice(this.tecnologias.length/2,this.tecnologias.length);
  }

  protected Actualizar_presentacion() : void{
    this.presentacion_service.Edit_persona(this.presentacion);
    this.mensaje = "PRESENTACION LISTA.";   
  }

  private Limpiar_presentacion() : Persona{
    return {
      id_persona : 0,
      apellido : '',
      correo : '',
      direccion : '',
      link_perfil : '',
      nombre : '',
      presentacion : '',
      profesion : '',
      regla : '',
      telefono : ''
    }
  }
}